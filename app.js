document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Initialization & Setup
    const data = window.chargingData || { metrics: {}, feedItems: [], chartData: [] };
    
    // Elements
    const feedContainer = document.getElementById('feed-container');
    const chartContainer = document.getElementById('chart-container');
    const searchBar = document.getElementById('search-bar');
    const feedTitle = document.getElementById('feed-title');
    const lastUpdateTime = document.getElementById('last-update-time');
    const rumorsCount = document.getElementById('rumors-count');
    const infoModal = document.getElementById('info-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const sidebarTabs = document.querySelectorAll('.nav-btn');
    const filterTags = document.querySelectorAll('.filter-tag');
    
    let currentTab = 'all'; // 'all', 'news', 'rumors', 'testing'
    let currentSearch = '';

    // 2. Formatting Helpers
    const formatDate = (dateStr) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    };

    const getBadgeClass = (type) => {
        switch(type) {
            case 'rumor': return 'badge-rumor';
            case 'testing': return 'badge-testing';
            case 'archive': return 'badge-archive';
            default: return 'badge-news';
        }
    };

    const getBadgeLabel = (type) => {
        switch(type) {
            case 'rumor': return 'Rumor/Leak';
            case 'testing': return 'Performance Test';
            case 'archive': return 'Archived Report';
            default: return 'News Report';
        }
    };

    const getChartBarClass = (type) => {
        switch(type) {
            case 'rumor': return 'bar-rumor';
            case 'testing': return 'bar-test';
            default: return '';
        }
    };

    // 3. Render Data Feed (Cards)
    const renderFeed = () => {
        feedContainer.innerHTML = '';
        
        // Filter by Tab Type AND Search Query
        const filtered = data.feedItems.filter(item => {
            const matchesTab = (
                currentTab === 'all' || 
                (currentTab === 'archive' && ['archive', 'news', 'rumors', 'testing'].includes(item.type)) || 
                item.type === currentTab
            );
            const matchesSearch = (
                item.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                item.preview.toLowerCase().includes(currentSearch.toLowerCase()) ||
                item.fullText.toLowerCase().includes(currentSearch.toLowerCase())
            );
            return matchesTab && matchesSearch;
        });

        // Set Header title
        if (currentTab === 'all') feedTitle.textContent = 'Latest Intelligence Feed';
        else if (currentTab === 'news') feedTitle.textContent = 'Hardware & Tech News';
        else if (currentTab === 'rumors') feedTitle.textContent = 'Rumors & Supply Chain Leaks';
        else if (currentTab === 'testing') feedTitle.textContent = 'Independent Testing Lab';
        else if (currentTab === 'archive') feedTitle.textContent = '6-Month Intelligence Archive';

        if (filtered.length === 0) {
            feedContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                    <div style="font-size: 40px; margin-bottom: 10px;">🔍</div>
                    <p>No intelligence items match your criteria.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'feed-card';
            card.innerHTML = `
                <div class="card-top">
                    <span class="card-badge ${getBadgeClass(item.type)}">${getBadgeLabel(item.type)}</span>
                    <span class="card-date">${formatDate(item.date)}</span>
                </div>
                <h4 class="card-title">${item.title}</h4>
                <p class="card-preview">${item.preview}</p>
                <div class="card-footer">
                    <span>Source: <strong style="color: var(--text-primary);">${item.source}</strong></span>
                    ${item.url && item.url !== '#' ? `<a href="${item.url}" target="_blank" class="source-link">Read Source ↗</a>` : ''}
                </div>
            `;

            // Card Click Event for Modal
            card.addEventListener('click', (e) => {
                // Prevent modal opening if user clicked the "Read Source" hyperlink
                if(e.target.tagName !== 'A') {
                    openModal(item);
                }
            });

            feedContainer.appendChild(card);
        });
    };

    // 4. Render Dynamic Charts
    const renderCharts = () => {
        chartContainer.innerHTML = '';
        
        // Find max speed in data to scale bars
        let maxDataValue = 0;
        data.chartData.forEach(c => { if (c.value > maxDataValue) maxDataValue = c.value; });
        
        data.chartData.forEach(item => {
            const percentage = (item.value / maxDataValue) * 100;
            const row = document.createElement('div');
            row.className = 'chart-row';
            row.innerHTML = `
                <div class="chart-row-label">
                    <div>
                        <span>${item.label}</span>
                        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px; opacity: 0.8;">Source: ${item.source}</div>
                    </div>
                    <strong style="color: var(--text-primary);">${item.value}W</strong>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar-fill ${getChartBarClass(item.type)}" style="width: 0%;"></div>
                </div>
            `;
            chartContainer.appendChild(row);

            // Animate Chart Bars (Trigger Reflow, then set width)
            setTimeout(() => {
                const fill = row.querySelector('.chart-bar-fill');
                if(fill) fill.style.width = `${percentage}%`;
            }, 100);
        });
    };

    // 5. Render Modal (Detailed View)
    const openModal = (item) => {
        let metricsHtml = '';
        if(item.metrics) {
            metricsHtml = `<div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">`;
            Object.entries(item.metrics).forEach(([key, val]) => {
                metricsHtml += `
                    <span style="background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); 
                    padding: 6px 12px; border-radius: 8px; font-size: 13px;">
                        <span style="color:var(--text-secondary);">${key}:</span> 
                        <strong style="color: var(--text-primary); margin-left:4px;">${val}</strong>
                    </span>
                `;
            });
            metricsHtml += `</div>`;
        }

        modalBody.innerHTML = `
            <span class="card-badge ${getBadgeClass(item.type)}" style="margin-bottom: 12px; display: inline-block;">
                ${getBadgeLabel(item.type)}
            </span>
            <h2 class="modal-title">${item.title}</h2>
            <div class="modal-meta">
                <span>📅 Date: <strong>${formatDate(item.date)}</strong></span>
                <span>🌐 Source: <strong>${item.source}</strong></span>
            </div>
            ${metricsHtml}
            <p class="modal-text">${item.fullText}</p>
            ${item.url && item.url !== '#' ? `
                <a href="${item.url}" target="_blank" 
                   style="display: inline-block; background: var(--text-primary); color: var(--bg-primary); 
                   text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; 
                   transition: transform 0.2s;" 
                   onmouseover="this.style.transform='translateY(-2px)'" 
                   onmouseout="this.style.transform='translateY(0)'">
                    Visit Full Source Link ↗
                </a>
            ` : ''}
        `;
        
        infoModal.classList.remove('hidden');
    };

    const closeModal = () => {
        infoModal.classList.add('hidden');
    };

    // 6. Bind User Interaction Events
    
    // Sidebar Navigation Tabs
    sidebarTabs.forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            sidebarTabs.forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            
            const tab = tabBtn.getAttribute('data-tab');
            currentTab = tab;
            
            // Sync filter tags in Overview feed
            filterTags.forEach(tag => {
                if(tag.getAttribute('data-filter') === tab) tag.classList.add('active');
                else tag.classList.remove('active');
            });

            renderFeed();
        });
    });

    // Content Filter Tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            
            const filter = tag.getAttribute('data-filter');
            currentTab = filter;
            
            // Sync Sidebar Nav
            sidebarTabs.forEach(btn => {
                if(btn.getAttribute('data-tab') === filter) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            renderFeed();
        });
    });

    // Search Bar Live Filtering
    searchBar.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderFeed();
    });

    // Modal Close
    modalClose.addEventListener('click', closeModal);
    
    infoModal.addEventListener('click', (e) => {
        if(e.target === infoModal) closeModal();
    });

    // Handle Escape Key for Modal
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !infoModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // 7. Initial Feed, Metrics, & Charts Injection
    if (data.feedItems) {
        // News & Releases
        const newsCount = document.getElementById('news-count');
        const newsSource = document.getElementById('news-source');
        const newsItems = data.feedItems.filter(item => item.type === 'news');
        if (newsCount) newsCount.textContent = newsItems.length || 0;
        if (newsSource) {
            const sources = [...new Set(newsItems.map(item => item.source.split('/')[0].trim()))];
            if (sources.length > 0) newsSource.textContent = `Updated (${sources.slice(0, 2).join(' & ')})`;
        }

        // Active Rumors
        const rumorsCount = document.getElementById('rumors-count');
        const rumorsSource = document.getElementById('rumors-source');
        const rumorItems = data.feedItems.filter(item => item.type === 'rumor');
        if (rumorsCount) rumorsCount.textContent = rumorItems.length || 0;
        if (rumorsSource) {
            const sources = [...new Set(rumorItems.map(item => item.source.split('/')[0].trim()))];
            if (sources.length > 0) rumorsSource.textContent = `Updated (${sources.slice(0, 2).join(' & ')})`;
        }

        // Performance Tests
        const testsCount = document.getElementById('tests-count');
        const testsSource = document.getElementById('tests-source');
        const testItems = data.feedItems.filter(item => item.type === 'testing');
        if (testsCount) testsCount.textContent = testItems.length || 0;
        if (testsSource) {
            const sources = [...new Set(testItems.map(item => item.source.split('/')[0].trim()))];
            if (sources.length > 0) testsSource.textContent = `Updated (${sources.slice(0, 2).join(' & ')})`;
        }

        // Archived Intel
        const archiveCount = document.getElementById('archive-count');
        const archiveItems = data.feedItems.filter(item => item.type === 'archive');
        if (archiveCount) archiveCount.textContent = archiveItems.length || 0;
    }

    if (data.lastUpdated) {
        lastUpdateTime.textContent = data.lastUpdated;
    }

    renderFeed();
    renderCharts();
});
