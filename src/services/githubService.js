const GITHUB_API_BASE_URL = 'https://api.github.com';

export const githubService = {
  // Get user repositories
  getUserRepos: async (username, perPage = 30, page = 1) => {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE_URL}/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated&direction=desc`
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const repos = await response.json();
      return repos;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  },

  // Get repository details
  getRepoDetails: async (owner, repo) => {
    try {
      const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${owner}/${repo}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const repoData = await response.json();
      return repoData;
    } catch (error) {
      console.error('Error fetching repository details:', error);
      throw error;
    }
  },

  // Get repository languages
  getRepoLanguages: async (owner, repo) => {
    try {
      const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/languages`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const languages = await response.json();
      return Object.keys(languages);
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      throw error;
    }
  },

  // Transform GitHub repo data to project format
  transformRepoToProject: (repo, languages = []) => {
    return {
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || `A ${repo.language || 'software'} project with ${repo.stargazers_count} stars and ${repo.forks_count} forks.`,
      image: `https://picsum.photos/seed/${repo.name}/400/250.jpg`,
      technologies: languages.length > 0 ? languages : (repo.language ? [repo.language] : ['JavaScript']),
      category: repo.language ? repo.language.toLowerCase() : 'javascript',
      githubLink: repo.html_url,
      liveLink: repo.homepage || repo.html_url,
      featured: repo.stargazers_count > 5,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at
    };
  },

  // Get repositories with full details
  getReposWithDetails: async (username, maxRepos = 6) => {
    try {
      const repos = await githubService.getUserRepos(username, maxRepos);
      const reposWithDetails = await Promise.all(
        repos.map(async (repo) => {
          try {
            const languages = await githubService.getRepoLanguages(repo.owner.login, repo.name);
            return githubService.transformRepoToProject(repo, languages);
          } catch (error) {
            console.warn(`Could not fetch languages for ${repo.name}:`, error);
            return githubService.transformRepoToProject(repo);
          }
        })
      );
      return reposWithDetails;
    } catch (error) {
      console.error('Error fetching repositories with details:', error);
      throw error;
    }
  }
};
