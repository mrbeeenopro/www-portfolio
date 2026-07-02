import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../data');
const jsonPath = path.join(dataDir, 'projects.json');

const initialProjects = [
  {
    "title": "oldcord",
    "description": "A theme for Discord that brings the old UI back, restoring classic features and nostalgia.",
    "cover": "/assets/images/projects/banner.png",
    "href": "https://github.com/mrbeeenopro/oldcord",
    "stars": 1
  },
  {
    "title": "Pterodactyl vi language",
    "description": "A complete Vietnamese localization and translation file pack for the Pterodactyl Panel interface.",
    "cover": "/assets/images/projects/pterodactyl-vi.png",
    "href": "https://github.com/mrbeeenopro/pterodactyl-vi",
    "stars": 1
  },
  {
    "title": "lemem windows",
    "description": "A Windows 11 VM container stack rigged to boot directly inside a Pterodactyl environment node.",
    "cover": "/assets/images/projects/windows11.png",
    "href": "https://github.com/mrbeeenopro/lemem_windows",
    "stars": 1
  },
  {
    "title": "lemem developers",
    "description": "A developer group and community hub in Vietnam focusing on sharing project builds and systems.",
    "cover": "/assets/images/projects/Lemem_Developer.png",
    "href": "https://discord.gg/AqrUvWkxU8",
    "stars": 0
  }
];

function fetchAndSync() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let projects = [];
  if (fs.existsSync(jsonPath)) {
    try {
      projects = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    } catch (e) {
      projects = initialProjects;
    }
  } else {
    projects = initialProjects;
  }

  const options = {
    hostname: 'api.github.com',
    path: '/users/mrbeeenopro/repos',
    method: 'GET',
    headers: {
      'User-Agent': 'mrbeeenopro-portfolio-sync'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        if (res.statusCode !== 200) {
          console.error(`[Sync Projects] GitHub API returned status code ${res.statusCode}`);
          return;
        }

        const repos = JSON.parse(data);
        if (!Array.isArray(repos)) {
          console.error('[Sync Projects] Expected array response from GitHub API');
          return;
        }

        const starredRepos = repos.filter(repo => repo.stargazers_count > 1);

        starredRepos.forEach(repo => {
          const existing = projects.find(p => p.href && p.href.toLowerCase() === repo.html_url.toLowerCase());

          let customCover = `https://opengraph.githubassets.com/1/mrbeeenopro/${repo.name}`;
          const localPng = path.join(__dirname, `../public/assets/images/projects/${repo.name}.png`);
          const localJpg = path.join(__dirname, `../public/assets/images/projects/${repo.name}.jpg`);
          if (fs.existsSync(localPng)) {
            customCover = `/assets/images/projects/${repo.name}.png`;
          } else if (fs.existsSync(localJpg)) {
            customCover = `/assets/images/projects/${repo.name}.jpg`;
          }

          if (existing) {
            existing.stars = repo.stargazers_count;
            if (!existing.description && repo.description) {
              existing.description = repo.description;
            }
            if (existing.cover === "/assets/images/projects/banner.png" || !existing.cover) {
              existing.cover = customCover;
            }
          } else {
            projects.push({
              title: repo.name,
              description: repo.description || "A public repository built by Mrbeenopro.",
              cover: customCover,
              href: repo.html_url,
              stars: repo.stargazers_count
            });
          }
        });

        const uniqueProjects = [];
        const seenHrefs = new Set();
        projects.forEach(p => {
          if (!p.href || !seenHrefs.has(p.href.toLowerCase())) {
            if (p.href) seenHrefs.add(p.href.toLowerCase());
            uniqueProjects.push(p);
          }
        });

        fs.writeFileSync(jsonPath, JSON.stringify(uniqueProjects, null, 2), 'utf8');
        console.log(`[Sync Projects] Successfully updated ${jsonPath} with ${starredRepos.length} starred repos`);
      } catch (err) {
        console.error('[Sync Projects] Error parsing response:', err);
      }
    });
  });

  req.on('error', (err) => {
    console.error('[Sync Projects] Error making request:', err);
  });

  req.end();
}

fetchAndSync();
