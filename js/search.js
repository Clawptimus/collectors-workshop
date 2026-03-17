// Search functionality for The Collector's Workshop

document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  const searchResults = document.getElementById('search-results');
  
  if (!searchBox || !searchResults) return;
  
  // Search function
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const results = articlesData.filter(article => {
      return article.title.toLowerCase().includes(lowerQuery) ||
             article.subtitle.toLowerCase().includes(lowerQuery) ||
             article.topic.toLowerCase().includes(lowerQuery) ||
             article.hub.toLowerCase().includes(lowerQuery) ||
             (article.keywords || []).some(k => k.toLowerCase().includes(lowerQuery));
    }).slice(0, 8); // Limit to 8 results
    
    displayResults(results);
  }
  
  // Display search results
  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
      searchResults.classList.add('active');
      return;
    }
    
    searchResults.innerHTML = results.map(article => `
      <a href="articles/${article.slug}.html" class="search-result-item">
        <strong>${article.title}</strong>
        <div style="font-size: 0.85rem; color: var(--color-text-light);">${article.subtitle}</div>
        <div style="font-size: 0.75rem; color: var(--color-accent); margin-top: 0.25rem;">${article.hub}</div>
      </a>
    `).join('');
    
    searchResults.classList.add('active');
  }
  
  // Event listeners
  searchBox.addEventListener('input', function(e) {
    performSearch(e.target.value);
  });
  
  searchBox.addEventListener('focus', function() {
    if (searchBox.value.length >= 2) {
      performSearch(searchBox.value);
    }
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });
  
  // Handle Enter key
  searchBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const query = searchBox.value;
      if (query.length >= 2) {
        window.location.href = `articles/index.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
});

// Article filtering for the articles index page
function filterArticles(hub = null, topic = null, searchQuery = null) {
  let filtered = articlesData;
  
  if (hub) {
    filtered = filtered.filter(a => a.hub === hub);
  }
  
  if (topic) {
    filtered = filtered.filter(a => a.topic === topic);
  }
  
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(lowerQuery) ||
      a.subtitle.toLowerCase().includes(lowerQuery) ||
      a.topic.toLowerCase().includes(lowerQuery) ||
      (a.keywords || []).some(k => k.toLowerCase().includes(lowerQuery))
    );
  }
  
  return filtered;
}

// Render article cards
function renderArticleCards(articles, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (articles.length === 0) {
    container.innerHTML = '<p>No articles found.</p>';
    return;
  }
  
  container.innerHTML = articles.map(article => `
    <article class="card">
      <h3><a href="${article.slug}.html">${article.title}</a></h3>
      <p>${article.subtitle}</p>
      <div class="card-meta">
        <span class="tag">${article.hub}</span>
        <span>${article.topic}</span>
      </div>
    </article>
  `).join('');
}
