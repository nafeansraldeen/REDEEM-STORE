/*
 * REDEEM STORE - Account Page + Orders (FULL)
 */
(function () {
    'use strict';

    console.log('🔧 Account Page: Starting...');

    // ============================================
    // ===== CSS =====
    // ============================================
    const ACCOUNT_CSS = `
        #page-account { padding: 0 0 30px 0; background: #F5F7FA; }
        .account-hero { background: linear-gradient(145deg, #1A73E8, #0D47A1); padding: 32px 24px 60px; border-radius: 0 0 32px 32px; position: relative; overflow: hidden; text-align: center; margin-bottom: -40px; }
        .account-hero::after { content: ''; position: absolute; top: -60px; right: -60px; width: 180px; height: 180px; background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%); border-radius: 50%; pointer-events: none; }
        .account-hero::before { content: ''; position: absolute; bottom: -50px; left: -50px; width: 140px; height: 140px; background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%); border-radius: 50%; pointer-events: none; }
        .account-avatar-wrapper { position: relative; display: inline-block; z-index: 2; margin-bottom: 12px; }
        .account-avatar { width: 100px; height: 100px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.25); background: #FFF; display: flex; align-items: center; justify-content: center; font-size: 42px; color: #1A73E8; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .account-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .account-avatar-edit { position: absolute; bottom: 0; left: 0; width: 32px; height: 32px; border-radius: 50%; background: #FFF; color: #1A73E8; border: none; display: flex; align-items: center; justify-content: center; font-size: 13px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .account-name { font-size: 22px; font-weight: 800; color: #FFF; position: relative; z-index: 2; margin: 0; }
        .account-phone { font-size: 14px; color: rgba(255,255,255,0.8); position: relative; z-index: 2; margin-top: 4px; direction: ltr; unicode-bidi: plaintext; text-align: center; display: inline-block; width: 100%; }
        .account-verified-badge { display: inline-flex; align-items: center; gap: 5px; background: rgba(255,255,255,0.15); color: #FFF; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 600; margin-top: 10px; position: relative; z-index: 2; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.12); }
        .account-verified-badge i { color: #6EF3E8; font-size: 12px; }
        .account-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 0 16px; margin-bottom: 20px; position: relative; z-index: 3; }
        .account-stat-card { background: #FFF; border-radius: 16px; padding: 16px 8px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; }
        .account-stat-icon { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px; font-size: 18px; background: #E8F0FE; color: #1A73E8; }
        .account-stat-card:nth-child(2) .account-stat-icon { background: rgba(245,158,11,0.12); color: #F59E0B; }
        .account-stat-value { font-size: 18px; font-weight: 800; color: #1A1A2E; }
        .account-stat-label { font-size: 11px; color: #888; font-weight: 500; margin-top: 2px; }
        .account-body { padding: 0 16px; }
        .account-section { background: #FFF; border-radius: 18px; margin-bottom: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; overflow: hidden; }
        .account-section-title { font-size: 14px; font-weight: 800; color: #1A1A2E; padding: 16px 18px 10px; display: flex; align-items: center; gap: 8px; }
        .account-section-title i { color: #1A73E8; font-size: 15px; }
        .account-item { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; border-top: 1px solid #f5f5f5; cursor: pointer; -webkit-tap-highlight-color: transparent; }
        .account-item:active { background: #f8f9fa; }
        .account-item-left { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
        .account-item-icon { width: 38px; height: 38px; border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; background: #E8F0FE; color: #1A73E8; }
        .account-item-icon.green { background: rgba(16,185,129,0.12); color: #10B981; }
        .account-item-icon.orange { background: rgba(245,158,11,0.12); color: #F59E0B; }
        .account-item-icon.purple { background: rgba(139,92,246,0.12); color: #8B5CF6; }
        .account-item-icon.cyan { background: rgba(0,188,212,0.12); color: #00BCD4; }
        .account-item-info { flex: 1; min-width: 0; }
        .account-item-info h4 { font-size: 14px; font-weight: 600; color: #1A1A2E; margin: 0 0 2px; }
        .account-item-info p { font-size: 12px; color: #999; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .account-item-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .account-item-right i.fa-chevron-left { color: #bbb; font-size: 13px; }
        .account-logout { margin: 8px 0 0; width: 100%; padding: 15px 20px; background: #FFF; color: #EF4444; border: 1.5px solid rgba(239,68,68,0.25); border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; font-family: inherit; }
        .account-logout:active { background: rgba(239,68,68,0.06); }
        .account-footer-note { text-align: center; padding: 20px 0 10px; font-size: 11px; color: #bbb; }
        .account-footer-note i { color: #1A73E8; margin: 0 3px; }

        /* Modals */
        .acc-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 9999; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.25s ease, visibility 0.25s ease; padding: 20px; }
        .acc-modal-overlay.open { opacity: 1; visibility: visible; }
        .acc-modal { background: #FFF; border-radius: 20px; max-width: 400px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 24px 20px 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.25); transform: scale(0.9); opacity: 0; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease; }
        .acc-modal-overlay.open .acc-modal { transform: scale(1); opacity: 1; }
        .acc-modal-header { text-align: center; margin-bottom: 20px; }
        .acc-modal-icon { width: 56px; height: 56px; border-radius: 16px; background: #E8F0FE; color: #1A73E8; display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 12px; }
        .acc-modal-title { font-size: 18px; font-weight: 800; color: #1A1A2E; margin: 0 0 4px; }
        .acc-modal-subtitle { font-size: 13px; color: #999; margin: 0; }
        .acc-modal-input-wrapper { position: relative; margin-bottom: 20px; }
        .acc-modal-input-wrapper i { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: #1A73E8; font-size: 15px; pointer-events: none; }
        .acc-modal-input { width: 100%; padding: 14px 44px 14px 16px; border: 2px solid #E8EAED; border-radius: 14px; font-size: 15px; font-weight: 500; color: #1A1A2E; background: #FFF; outline: none; text-align: right; direction: rtl; font-family: inherit; }
        .acc-modal-input:focus { border-color: #1A73E8; box-shadow: 0 0 0 4px rgba(26,115,232,0.10); }
        .acc-modal-actions { display: flex; gap: 10px; }
        .acc-modal-btn { flex: 1; padding: 13px 16px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; border: none; font-family: inherit; }
        .acc-modal-btn.cancel { background: #F5F7FA; color: #666; }
        .acc-modal-btn.confirm { background: #1A73E8; color: #FFF; box-shadow: 0 4px 14px rgba(26,115,232,0.30); }

        /* Toggle */
        .acc-toggle { position: relative; display: inline-block; width: 48px; height: 26px; flex-shrink: 0; cursor: pointer; }
        .acc-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
        .acc-toggle-track { position: absolute; inset: 0; background: #D1D5DB; border-radius: 50px; transition: background 0.3s; }
        .acc-toggle-thumb { position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: #FFF; border-radius: 50%; transition: transform 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.15); z-index: 2; }
        .acc-toggle input:checked ~ .acc-toggle-track { background: #1A73E8; }
        .acc-toggle input:checked ~ .acc-toggle-thumb { transform: translateX(22px); }

        /* Language */
        .acc-lang-list { display: flex; flex-direction: column; gap: 10px; }
        .acc-lang-option { display: flex; align-items: center; gap: 14px; padding: 14px 16px; background: #FFF; border: 2px solid #E8EAED; border-radius: 14px; cursor: pointer; text-align: right; width: 100%; font-family: inherit; }
        .acc-lang-option.selected { border-color: #1A73E8; background: #F5F9FF; }
        .acc-lang-flag { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; background: #F5F7FA; flex-shrink: 0; border: 2px solid #F0F2F5; }
        .acc-lang-option.selected .acc-lang-flag { border-color: #1A73E8; }
        .acc-lang-info { flex: 1; min-width: 0; }
        .acc-lang-info h5 { font-size: 15px; font-weight: 700; color: #1A1A2E; margin: 0 0 3px; }
        .acc-lang-info p { font-size: 12px; color: #888; margin: 0; direction: ltr; text-align: right; }
        .acc-lang-check { width: 24px; height: 24px; border-radius: 50%; border: 2px solid #D1D5DB; display: flex; align-items: center; justify-content: center; font-size: 12px; color: transparent; flex-shrink: 0; }
        .acc-lang-option.selected .acc-lang-check { background: #1A73E8; border-color: #1A73E8; color: #FFF; }
        .acc-lang-note { background: #F5F9FF; border: 1px solid #D6E8F8; border-radius: 12px; padding: 12px 14px; font-size: 12px; color: #1A73E8; display: flex; gap: 10px; margin-top: 8px; }

        /* About */
        .acc-about-hero { text-align: center; padding: 8px 0 20px; }
        .acc-about-logo { font-size: 32px; font-weight: 900; letter-spacing: 1.5px; color: #1A73E8; }
        .acc-about-logo span { color: #00BCD4; }
        .acc-about-tagline { font-size: 13px; color: #888; margin-top: 2px; }
        .acc-about-divider { height: 2px; background: linear-gradient(90deg, transparent, #1A73E8, transparent); margin: 16px 0; opacity: 0.6; }
        .acc-about-pattern { text-align: center; color: #B5D4F0; font-size: 10px; letter-spacing: 2px; margin: 12px 0; overflow: hidden; white-space: nowrap; user-select: none; }
        .acc-about-content { background: linear-gradient(145deg, #F5F9FF, #FFF); border: 1px solid #E8F0FE; border-radius: 16px; padding: 18px 16px; margin-bottom: 12px; }
        .acc-about-text { font-size: 13.5px; color: #1A1A2E; line-height: 2; text-align: center; font-weight: 500; }
        .acc-about-text p { margin: 0 0 8px; }
        .acc-about-text p:last-child { margin-bottom: 0; }
        .acc-about-text .cyan { color: #00BCD4; font-weight: 800; }
        .acc-about-features { display: flex; flex-direction: column; gap: 10px; margin: 16px 0; }
        .acc-about-feature { display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: #FFF; border: 1px solid #E8F0FE; border-radius: 12px; }
        .acc-about-feature-icon { width: 38px; height: 38px; border-radius: 11px; background: #E8F0FE; color: #1A73E8; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .acc-about-feature-icon.cyan { background: rgba(0,188,212,0.12); color: #00BCD4; }
        .acc-about-feature-icon.green { background: rgba(16,185,129,0.12); color: #10B981; }
        .acc-about-feature-icon.orange { background: rgba(245,158,11,0.12); color: #F59E0B; }
        .acc-about-feature-info h5 { font-size: 13px; font-weight: 700; color: #1A1A2E; margin: 0 0 2px; }
        .acc-about-feature-info p { font-size: 11.5px; color: #888; margin: 0; }
        .acc-about-slogan { background: linear-gradient(145deg, #1A73E8, #0D47A1); border-radius: 14px; padding: 16px 18px; margin: 16px 0 12px; color: #FFF; text-align: center; box-shadow: 0 6px 20px rgba(26,115,232,0.25); }
        .acc-about-slogan-text { font-size: 15px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; }
        .acc-about-slogan-text .brand { color: #6EF3E8; font-weight: 900; }
        .acc-about-slogan-heart { color: #FF6B9D; font-size: 16px; animation: heartBeat 1.5s infinite; display: inline-block; }
        @keyframes heartBeat { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .acc-about-footer { text-align: center; padding: 16px 0 8px; font-size: 11.5px; color: #B0B8C4; line-height: 1.8; }
        .acc-about-footer .blue-heart { color: #1A73E8; font-size: 14px; margin: 0 4px; display: inline-block; animation: heartBeat 1.8s infinite; }
        .acc-about-version { display: inline-block; background: #F5F7FA; color: #888; padding: 4px 12px; border-radius: 50px; font-size: 10.5px; font-weight: 700; margin-top: 8px; border: 1px solid #E8EAED; }
        .acc-about-close-btn { width: 100%; padding: 14px 20px; background: #1A73E8; color: #FFF; border: none; border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: inherit; margin-top: 6px; box-shadow: 0 6px 20px rgba(26,115,232,0.25); display: flex; align-items: center; justify-content: center; gap: 8px; }

        /* Toast */
        #accToast { position: fixed; top: 24px; left: 50%; transform: translateX(-50%) translateY(-100px); background: #1A1A2E; color: #FFF; padding: 14px 22px; border-radius: 14px; font-size: 14px; font-weight: 600; box-shadow: 0 10px 40px rgba(0,0,0,0.25); z-index: 99999; opacity: 0; transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); max-width: 90%; text-align: center; pointer-events: none; }

        /* Orders Page */
        .acc-orders-page, .acc-order-detail-page { position: fixed; inset: 0; background: #F5F7FA; z-index: 9998; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); max-width: 480px; margin: 0 auto; box-shadow: 0 0 40px rgba(0,0,0,0.1); }
        .acc-orders-page.active, .acc-order-detail-page.active { transform: translateX(0); }
        .acc-order-detail-page { z-index: 9999; }
        .acc-orders-header { background: #FFF; padding: 14px 16px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #F0F2F5; }
        .acc-orders-back { width: 40px; height: 40px; border-radius: 12px; border: none; background: #F0F2F5; color: #1A1A2E; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .acc-orders-title { font-size: 18px; font-weight: 800; color: #1A1A2E; margin: 0; }
        .acc-orders-count { font-size: 12px; color: #888; margin-top: 2px; }
        .acc-orders-filters { display: flex; gap: 8px; padding: 12px 16px; overflow-x: auto; scrollbar-width: none; }
        .acc-orders-filters::-webkit-scrollbar { display: none; }
        .acc-orders-filter { padding: 8px 14px; border-radius: 50px; border: 1px solid #E8EAED; background: #FFF; color: #555; font-size: 12px; font-weight: 600; cursor: pointer; white-space: nowrap; flex-shrink: 0; font-family: inherit; display: flex; align-items: center; gap: 6px; }
        .acc-orders-filter.active { background: #1A73E8; color: #FFF; border-color: #1A73E8; }
        .acc-orders-filter .badge { background: rgba(255,255,255,0.25); color: #FFF; padding: 1px 7px; border-radius: 50px; font-size: 10px; font-weight: 700; }
        .acc-orders-filter:not(.active) .badge { background: #E8F0FE; color: #1A73E8; }
        .acc-orders-list { flex: 1; overflow-y: auto; padding: 4px 16px 24px; }
        .acc-order-card { background: #FFF; border-radius: 16px; padding: 14px; margin-bottom: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid #F0F2F5; cursor: pointer; animation: fadeUpOrd 0.3s ease; }
        .acc-order-card:active { transform: scale(0.98); }
        @keyframes fadeUpOrd { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .acc-order-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dashed #F0F2F5; gap: 8px; }
        .acc-order-id { font-size: 12px; font-weight: 800; color: #1A1A2E; direction: ltr; font-family: 'SF Mono', 'Courier New', monospace; }
        .acc-order-status { font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 50px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
        .acc-order-status.pending { background: rgba(245,158,11,0.12); color: #F59E0B; }
        .acc-order-status.processing { background: rgba(26,115,232,0.12); color: #1A73E8; }
        .acc-order-status.completed { background: rgba(16,185,129,0.12); color: #10B981; }
        .acc-order-status.cancelled { background: rgba(239,68,68,0.10); color: #EF4444; }
        .acc-order-body { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .acc-order-thumb { width: 54px; height: 54px; border-radius: 12px; background: #F5F7FA; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 5px; }
        .acc-order-thumb img { width: 100%; height: 100%; object-fit: contain; }
        .acc-order-info { flex: 1; min-width: 0; }
        .acc-order-name { font-size: 13px; font-weight: 700; color: #1A1A2E; margin: 0 0 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .acc-order-desc { font-size: 11px; color: #888; margin: 0 0 4px; }
        .acc-order-date { font-size: 10px; color: #B0B8C4; display: flex; align-items: center; gap: 4px; }
        .acc-order-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px dashed #F0F2F5; gap: 8px; }
        .acc-order-total-label { font-size: 10px; color: #999; display: block; margin-bottom: 2px; }
        .acc-order-total { font-size: 16px; font-weight: 800; color: #1A73E8; direction: ltr; }
        .acc-order-actions { display: flex; gap: 6px; }
        .acc-order-btn { width: 34px; height: 34px; border-radius: 10px; border: 1px solid #E8EAED; background: #FFF; color: #666; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .acc-order-btn.primary { background: #1A73E8; color: #FFF; border-color: #1A73E8; }
        .acc-orders-empty { text-align: center; padding: 60px 20px; display: none; }
        .acc-orders-empty.show { display: block; }
        .acc-orders-empty-icon { width: 90px; height: 90px; border-radius: 50%; background: #F0F2F5; color: #B0B8C4; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 16px; }
        .acc-orders-empty h3 { font-size: 17px; font-weight: 700; color: #1A1A2E; margin: 0 0 6px; }
        .acc-orders-empty p { font-size: 13px; color: #999; margin: 0 0 16px; }
        .acc-orders-empty-btn { padding: 11px 24px; background: #1A73E8; color: #FFF; border: none; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }

        /* Order Detail */
        .acc-order-detail-body { flex: 1; overflow-y: auto; padding: 12px 16px 100px; }
        .acc-detail-status-card { border-radius: 18px; padding: 20px; color: #FFF; margin-bottom: 12px; position: relative; overflow: hidden; background: linear-gradient(145deg, #1A73E8, #0D47A1); }
        .acc-detail-status-card.status-completed { background: linear-gradient(145deg, #10B981, #047857); }
        .acc-detail-status-card.status-pending { background: linear-gradient(145deg, #F59E0B, #B45309); }
        .acc-detail-status-card.status-cancelled { background: linear-gradient(145deg, #EF4444, #991B1B); }
        .acc-detail-status-icon { width: 48px; height: 48px; border-radius: 14px; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 12px; }
        .acc-detail-status-title { font-size: 19px; font-weight: 800; margin: 0 0 4px; }
        .acc-detail-status-sub { font-size: 12px; color: rgba(255,255,255,0.85); margin: 0; }
        .acc-detail-section { background: #FFF; border-radius: 16px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid #F0F2F5; }
        .acc-detail-section-title { font-size: 13px; font-weight: 800; color: #1A1A2E; margin: 0 0 12px; display: flex; align-items: center; gap: 8px; padding-bottom: 10px; border-bottom: 1px solid #F5F7FA; }
        .acc-detail-section-title i { color: #1A73E8; font-size: 14px; }
        .acc-detail-product { display: flex; align-items: center; gap: 12px; padding: 10px 0; }
        .acc-detail-product-thumb { width: 52px; height: 52px; border-radius: 12px; background: #F5F7FA; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 4px; }
        .acc-detail-product-thumb img { width: 100%; height: 100%; object-fit: contain; }
        .acc-detail-product-info { flex: 1; min-width: 0; }
        .acc-detail-product-info h5 { font-size: 13px; font-weight: 700; color: #1A1A2E; margin: 0 0 3px; }
        .acc-detail-product-info p { font-size: 11px; color: #888; margin: 0; }
        .acc-detail-product-price { font-size: 14px; font-weight: 800; color: #1A73E8; min-width: 60px; text-align: left; direction: ltr; }
        .acc-detail-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-size: 13px; gap: 12px; }
        .acc-detail-row-label { color: #888; font-weight: 500; flex-shrink: 0; }
        .acc-detail-row-value { color: #1A1A2E; font-weight: 700; text-align: left; word-break: break-word; }
        .acc-detail-row-value.ltr { direction: ltr; font-family: 'SF Mono', 'Courier New', monospace; font-size: 12px; }
        .acc-detail-row.total { padding-top: 12px; border-top: 1px dashed #F0F2F5; margin-top: 4px; }
        .acc-detail-row.total .acc-detail-row-label { color: #1A1A2E; font-weight: 700; font-size: 15px; }
        .acc-detail-row.total .acc-detail-row-value { color: #1A73E8; font-size: 18px; font-weight: 800; }
        .acc-detail-actions { position: absolute; bottom: 0; left: 0; right: 0; background: #FFF; padding: 12px 16px; box-shadow: 0 -4px 20px rgba(0,0,0,0.06); border-top: 1px solid #F0F2F5; display: flex; gap: 10px; z-index: 100; }
        .acc-detail-btn { flex: 1; padding: 13px 12px; border-radius: 12px; font-size: 13px; font-weight: 700; cursor: pointer; border: none; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit; }
        .acc-detail-btn.secondary { background: #F5F7FA; color: #1A73E8; border: 1.5px solid #E8EAED; }
        .acc-detail-btn.primary { background: #1A73E8; color: #FFF; box-shadow: 0 4px 14px rgba(26,115,232,0.25); }
        .acc-progress-steps { position: relative; padding-right: 26px; }
        .acc-progress-line { position: absolute; right: 9px; top: 8px; bottom: 8px; width: 2px; background: #F0F2F5; border-radius: 2px; }
        .acc-progress-step { position: relative; padding-bottom: 18px; padding-right: 18px; }
        .acc-progress-step:last-child { padding-bottom: 0; }
        .acc-progress-step-dot { position: absolute; right: -26px; top: 2px; width: 20px; height: 20px; border-radius: 50%; background: #F0F2F5; color: #B0B8C4; display: flex; align-items: center; justify-content: center; font-size: 9px; border: 3px solid #FFF; box-shadow: 0 0 0 2px #F0F2F5; z-index: 2; }
        .acc-progress-step.done .acc-progress-step-dot { background: #10B981; color: #FFF; box-shadow: 0 0 0 2px #10B981; }
        .acc-progress-step.current .acc-progress-step-dot { background: #1A73E8; color: #FFF; box-shadow: 0 0 0 3px rgba(26,115,232,0.25); }
        .acc-progress-step-label { font-size: 13px; font-weight: 700; color: #1A1A2E; margin: 0 0 2px; }
        .acc-progress-step.done .acc-progress-step-label { color: #10B981; }
        .acc-progress-step.current .acc-progress-step-label { color: #1A73E8; }
        .acc-progress-step-date { font-size: 11px; color: #999; }
    `;

    // ============================================
    // ===== HTML =====
    // ============================================
    const ACCOUNT_HTML = `
        <div class="page" id="page-account">
            <div class="account-hero">
                <div class="account-avatar-wrapper">
                    <div class="account-avatar" id="accountAvatar"><i class="fas fa-user"></i></div>
                    <button class="account-avatar-edit" id="avatarEditBtn"><i class="fas fa-camera"></i></button>
                </div>
                <h2 class="account-name" id="accountName">مستخدم REDEEM</h2>
                <p class="account-phone"><bdi id="accountPhone">+249901839168</bdi></p>
                <span class="account-verified-badge"><i class="fas fa-check-circle"></i><span>حساب موثّق</span></span>
            </div>
            <div class="account-stats">
                <div class="account-stat-card">
                    <div class="account-stat-icon"><i class="fas fa-shopping-bag"></i></div>
                    <div class="account-stat-value" id="statOrders">5</div>
                    <div class="account-stat-label">الطلبات</div>
                </div>
                <div class="account-stat-card">
                    <div class="account-stat-icon"><i class="fas fa-star"></i></div>
                    <div class="account-stat-value" id="statPoints">250</div>
                    <div class="account-stat-label">النقاط</div>
                </div>
            </div>
            <div class="account-body">
                <div class="account-section">
                    <div class="account-section-title"><i class="fas fa-user-circle"></i><span>معلومات الحساب</span></div>
                    <div class="account-item" data-action="edit-name">
                        <div class="account-item-left"><div class="account-item-icon"><i class="fas fa-user"></i></div><div class="account-item-info"><h4>الاسم الكامل</h4><p id="infoName">مستخدم REDEEM</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                    <div class="account-item" data-action="edit-email">
                        <div class="account-item-left"><div class="account-item-icon cyan"><i class="fas fa-envelope"></i></div><div class="account-item-info"><h4>البريد الإلكتروني</h4><p id="infoEmail">user@redeemstore.com</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                    <div class="account-item" data-action="edit-phone">
                        <div class="account-item-left"><div class="account-item-icon green"><i class="fab fa-whatsapp"></i></div><div class="account-item-info"><h4>رقم واتساب</h4><p><bdi id="infoPhone">+249901839168</bdi></p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                </div>
                <div class="account-section">
                    <div class="account-section-title"><i class="fas fa-shield-alt"></i><span>الأمان والخصوصية</span></div>
                    <div class="account-item" data-action="change-password">
                        <div class="account-item-left"><div class="account-item-icon orange"><i class="fas fa-lock"></i></div><div class="account-item-info"><h4>تغيير كلمة المرور</h4><p>آخر تحديث قبل 30 يوم</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                    <div class="account-item" style="cursor:default;">
                        <div class="account-item-left"><div class="account-item-icon purple"><i class="fas fa-fingerprint"></i></div><div class="account-item-info"><h4>التحقق بخطوتين</h4><p>حماية إضافية</p></div></div>
                        <div class="account-item-right"><label class="acc-toggle"><input data-key="two-factor" id="toggleTwoFactor" type="checkbox"/><span class="acc-toggle-track"></span><span class="acc-toggle-thumb"></span></label></div>
                    </div>
                </div>
                <div class="account-section">
                    <div class="account-section-title"><i class="fas fa-cog"></i><span>الطلبات والإعدادات</span></div>
                    <div class="account-item" data-action="my-orders">
                        <div class="account-item-left"><div class="account-item-icon"><i class="fas fa-receipt"></i></div><div class="account-item-info"><h4>طلباتي</h4><p>عرض جميع طلباتك السابقة</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                    <div class="account-item" style="cursor:default;">
                        <div class="account-item-left"><div class="account-item-icon orange"><i class="fas fa-bell"></i></div><div class="account-item-info"><h4>الإشعارات</h4><p>إدارة تنبيهاتك</p></div></div>
                        <div class="account-item-right"><label class="acc-toggle"><input checked data-key="notifications" type="checkbox"/><span class="acc-toggle-track"></span><span class="acc-toggle-thumb"></span></label></div>
                    </div>
                    <div class="account-item" data-action="language">
                        <div class="account-item-left"><div class="account-item-icon cyan"><i class="fas fa-globe"></i></div><div class="account-item-info"><h4>اللغة</h4><p id="currentLanguageLabel">العربية</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                    <div class="account-item" data-action="about">
                        <div class="account-item-left"><div class="account-item-icon"><i class="fas fa-info-circle"></i></div><div class="account-item-info"><h4>عن التطبيق</h4><p>REDEEM STORE v1.0.0</p></div></div>
                        <div class="account-item-right"><i class="fas fa-chevron-left"></i></div>
                    </div>
                </div>
                <button class="account-logout" id="accountLogoutBtn"><i class="fas fa-sign-out-alt"></i><span>تسجيل الخروج</span></button>
                <div class="account-footer-note"><i class="fas fa-heart"></i><span>REDEEM STORE © 2026</span></div>
            </div>
        </div>

        <div class="acc-modal-overlay" id="accInputModal">
            <div class="acc-modal">
                <div class="acc-modal-header">
                    <div class="acc-modal-icon" id="accModalIcon"><i class="fas fa-user"></i></div>
                    <h3 class="acc-modal-title" id="accModalTitle">تعديل</h3>
                    <p class="acc-modal-subtitle" id="accModalSubtitle">أدخل القيمة الجديدة</p>
                </div>
                <div class="acc-modal-input-wrapper"><i class="fas fa-pen" id="accModalInputIcon"></i><input class="acc-modal-input" id="accModalInput" type="text"/></div>
                <div class="acc-modal-actions">
                    <button class="acc-modal-btn cancel" id="accModalCancel">إلغاء</button>
                    <button class="acc-modal-btn confirm" id="accModalConfirm">حسناً</button>
                </div>
            </div>
        </div>

        <div class="acc-modal-overlay" id="accPasswordModal">
            <div class="acc-modal">
                <div class="acc-modal-header">
                    <div class="acc-modal-icon" style="background: rgba(245,158,11,0.12); color:#F59E0B;"><i class="fas fa-lock"></i></div>
                    <h3 class="acc-modal-title">تغيير كلمة المرور</h3>
                    <p class="acc-modal-subtitle">أدخل بياناتك</p>
                </div>
                <div class="acc-modal-input-wrapper"><i class="fas fa-lock"></i><input class="acc-modal-input" id="oldPassword" placeholder="كلمة المرور الحالية" type="password"/></div>
                <div class="acc-modal-input-wrapper"><i class="fas fa-key"></i><input class="acc-modal-input" id="newPassword" placeholder="كلمة المرور الجديدة" type="password"/></div>
                <div class="acc-modal-input-wrapper"><i class="fas fa-check-circle"></i><input class="acc-modal-input" id="confirmPassword" placeholder="تأكيد كلمة المرور" type="password"/></div>
                <div class="acc-modal-actions">
                    <button class="acc-modal-btn cancel" id="passCancelBtn">إلغاء</button>
                    <button class="acc-modal-btn confirm" id="passSaveBtn">تحديث</button>
                </div>
            </div>
        </div>

        <div class="acc-modal-overlay" id="acc2faModal">
            <div class="acc-modal">
                <div class="acc-modal-header">
                    <div class="acc-modal-icon" style="background: rgba(139,92,246,0.12); color:#8B5CF6;"><i class="fas fa-fingerprint"></i></div>
                    <h3 class="acc-modal-title">تفعيل التحقق بخطوتين</h3>
                    <p class="acc-modal-subtitle">اختر طريقة استقبال الرمز</p>
                </div>
                <div id="acc2faStep1">
                    <button class="acc-lang-option selected" data-method="sms" style="margin-bottom:10px;">
                        <div class="acc-lang-flag"><i class="fas fa-sms"></i></div>
                        <div class="acc-lang-info"><h5>رسالة نصية SMS</h5><p>استقبل الرمز عبر رسالة</p></div>
                        <div class="acc-lang-check"><i class="fas fa-check"></i></div>
                    </button>
                    <button class="acc-lang-option" data-method="app" style="margin-bottom:10px;">
                        <div class="acc-lang-flag"><i class="fas fa-mobile-alt"></i></div>
                        <div class="acc-lang-info"><h5>تطبيق المصادقة</h5><p>Google Authenticator</p></div>
                        <div class="acc-lang-check"><i class="fas fa-check"></i></div>
                    </button>
                </div>
                <div id="acc2faStep2" style="display:none;">
                    <div class="acc-modal-input-wrapper"><i class="fas fa-key"></i><input class="acc-modal-input" id="otpCode" maxlength="6" placeholder="أدخل الرمز المكوّن من 6 أرقام" style="direction:ltr; text-align:center; letter-spacing:8px; font-size:20px;" type="text"/></div>
                </div>
                <div id="acc2faStep3" style="display:none; text-align:center;">
                    <div style="width:80px; height:80px; border-radius:50%; background:rgba(16,185,129,0.12); color:#10B981; display:flex; align-items:center; justify-content:center; font-size:38px; margin:0 auto 16px;"><i class="fas fa-check"></i></div>
                    <h4 style="font-size:18px; font-weight:800; color:#1A1A2E; margin:0 0 6px;">تم التفعيل بنجاح!</h4>
                    <p style="font-size:13px; color:#888; margin:0 0 20px;">احفظ الرموز الاحتياطية</p>
                    <div style="background:#F5F9FF; border:2px dashed #B5D4F0; border-radius:14px; padding:16px; margin-bottom:12px;">
                        <div style="font-size:13px; font-weight:700; margin-bottom:10px;">الرموز الاحتياطية</div>
                        <div id="backupCodesList" style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px; direction:ltr; font-family:monospace; font-size:12px;"></div>
                    </div>
                </div>
                <div class="acc-modal-actions" style="margin-top:16px;">
                    <button class="acc-modal-btn cancel" id="acc2faCancelBtn">إلغاء</button>
                    <button class="acc-modal-btn confirm" id="acc2faNextBtn"><span class="btn-text">متابعة</span></button>
                </div>
            </div>
        </div>

        <div class="acc-modal-overlay" id="accLangModal">
            <div class="acc-modal">
                <div class="acc-modal-header">
                    <div class="acc-modal-icon" style="background: rgba(0,188,212,0.12); color:#00BCD4;"><i class="fas fa-globe"></i></div>
                    <h3 class="acc-modal-title">اختيار اللغة</h3>
                    <p class="acc-modal-subtitle">اختر اللغة المفضلة</p>
                </div>
                <div class="acc-lang-list">
                    <button class="acc-lang-option" data-lang="ar" type="button">
                        <div class="acc-lang-flag">🇸🇦</div>
                        <div class="acc-lang-info"><h5>العربية</h5><p>Arabic</p></div>
                        <div class="acc-lang-check"><i class="fas fa-check"></i></div>
                    </button>
                    <button class="acc-lang-option" data-lang="en" type="button">
                        <div class="acc-lang-flag">🇬🇧</div>
                        <div class="acc-lang-info"><h5>English</h5><p>الإنجليزية</p></div>
                        <div class="acc-lang-check"><i class="fas fa-check"></i></div>
                    </button>
                </div>
                <div class="acc-lang-note"><i class="fas fa-info-circle"></i><div>سيتم تحديث التطبيق مباشرة</div></div>
            </div>
        </div>

        <div class="acc-modal-overlay" id="accAboutModal">
            <div class="acc-modal">
                <div class="acc-about-hero">
                    <div class="acc-about-logo">RE<span>DEM</span> STORE</div>
                    <div class="acc-about-tagline">متجرك الرقمي الموثوق 🩵</div>
                </div>
                <div class="acc-about-divider"></div>
                <div class="acc-about-content"><div class="acc-about-text"><p>متجر متخصص في شحن الألعاب والبطاقات الإلكترونية!</p></div></div>
                <div class="acc-about-pattern">▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬</div>
                <div class="acc-about-features">
                    <div class="acc-about-feature"><div class="acc-about-feature-icon"><i class="fas fa-gamepad"></i></div><div class="acc-about-feature-info"><h5>بطاقات الألعاب</h5><p>شحن فوري لجميع الألعاب</p></div></div>
                    <div class="acc-about-feature"><div class="acc-about-feature-icon cyan"><i class="fas fa-store"></i></div><div class="acc-about-feature-info"><h5>بطاقات المتاجر</h5><p>Amazon, Noon, SHEIN</p></div></div>
                    <div class="acc-about-feature"><div class="acc-about-feature-icon green"><i class="fas fa-credit-card"></i></div><div class="acc-about-feature-info"><h5>البطاقات الإلكترونية</h5><p>Google Play, iTunes, PSN</p></div></div>
                    <div class="acc-about-feature"><div class="acc-about-feature-icon orange"><i class="fas fa-crown"></i></div><div class="acc-about-feature-info"><h5>الاشتراكات الرقمية</h5><p>Canva, Netflix, Starlink</p></div></div>
                </div>
                <div class="acc-about-pattern">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</div>
                <div class="acc-about-content">
                    <div class="acc-about-text">
                        <p>كما تتوفر لدينا خدمة الاشتراكات الرقمية مثل Canva، Netflix، Starlink وغيرها.</p>
                        <p>كل بطاقات المتاجر، بطاقات الألعاب، والبطاقات الإلكترونية في مكان واحد 😊</p>
                        <p><span class="cyan">"وغيرها من البطاقات النادرة فقط اطلب 😉!"</span></p>
                    </div>
                </div>
                <div class="acc-about-slogan">
                    <div class="acc-about-slogan-text">
                        <i class="fas fa-bolt" style="color:#FCD34D;"></i>
                        <span>مع</span>
                        <span class="brand">Redeem</span>
                        <span>اشحن وإنت مطمن</span>
                        <i class="fas fa-heart acc-about-slogan-heart"></i>
                    </div>
                </div>
                <div class="acc-about-footer">
                    <i class="fas fa-heart blue-heart"></i>
                    <span>صنع بحب من فريق</span>
                    <strong style="color:#1A73E8;"> REDEEM STORE</strong>
                    <i class="fas fa-heart blue-heart"></i>
                    <br/>
                    <span class="acc-about-version">v1.0.0</span>
                </div>
                <button class="acc-about-close-btn" id="accAboutCloseBtn"><i class="fas fa-check-circle"></i><span>تم، شكراً</span></button>
            </div>
        </div>

        <div class="acc-modal-overlay" id="accConfirmModal">
            <div class="acc-modal">
                <div class="acc-modal-header">
                    <div class="acc-modal-icon" id="confirmIcon" style="background: rgba(239,68,68,0.10); color:#EF4444;"><i class="fas fa-exclamation-triangle"></i></div>
                    <h3 class="acc-modal-title" id="confirmTitle">هل أنت متأكد؟</h3>
                    <p class="acc-modal-subtitle" id="confirmSubtitle">لا يمكن التراجع</p>
                </div>
                <div class="acc-modal-actions">
                    <button class="acc-modal-btn cancel" id="confirmCancelBtn">إلغاء</button>
                    <button class="acc-modal-btn confirm" id="confirmOkBtn" style="background:#EF4444;">تأكيد</button>
                </div>
            </div>
        </div>

        <div class="acc-orders-page" id="accOrdersPage">
            <div class="acc-orders-header">
                <button class="acc-orders-back" id="accOrdersBackBtn"><i class="fas fa-arrow-right"></i></button>
                <div>
                    <h2 class="acc-orders-title">طلباتي</h2>
                    <div class="acc-orders-count" id="accOrdersCount">0 طلب</div>
                </div>
            </div>
            <div class="acc-orders-filters">
                <button class="acc-orders-filter active" data-filter="all"><i class="fas fa-list"></i> الكل <span class="badge" id="fAll">0</span></button>
                <button class="acc-orders-filter" data-filter="pending"><i class="fas fa-clock"></i> قيد الانتظار <span class="badge" id="fPending">0</span></button>
                <button class="acc-orders-filter" data-filter="processing"><i class="fas fa-spinner"></i> قيد التنفيذ <span class="badge" id="fProcessing">0</span></button>
                <button class="acc-orders-filter" data-filter="completed"><i class="fas fa-check"></i> مكتمل <span class="badge" id="fCompleted">0</span></button>
                <button class="acc-orders-filter" data-filter="cancelled"><i class="fas fa-times"></i> ملغي <span class="badge" id="fCancelled">0</span></button>
            </div>
            <div class="acc-orders-list" id="accOrdersList"></div>
            <div class="acc-orders-empty" id="accOrdersEmpty">
                <div class="acc-orders-empty-icon"><i class="fas fa-box-open"></i></div>
                <h3>لا توجد طلبات</h3>
                <p>لم تقم بأي طلبات بعد. ابدأ التسوق الآن!</p>
                <button class="acc-orders-empty-btn" id="accOrdersEmptyBtn">ابدأ التسوق</button>
            </div>
        </div>

        <div class="acc-order-detail-page" id="accOrderDetailPage">
            <div class="acc-orders-header">
                <button class="acc-orders-back" id="accOrderDetailBackBtn"><i class="fas fa-arrow-right"></i></button>
                <div>
                    <h2 class="acc-orders-title">تفاصيل الطلب</h2>
                    <div class="acc-orders-count" id="accOrderDetailId">#—</div>
                </div>
            </div>
            <div class="acc-order-detail-body" id="accOrderDetailBody"></div>
            <div class="acc-detail-actions" id="accOrderDetailActions"></div>
        </div>
    `;

    // ============================================
    // ===== MOUNT =====
    // ============================================
    function mountAccountPage() {
        if (document.getElementById('page-account')) return;
        const host = document.querySelector('.page-container') || document.body;

        if (!document.getElementById('redeem-account-style')) {
            const style = document.createElement('style');
            style.id = 'redeem-account-style';
            style.textContent = ACCOUNT_CSS;
            document.head.appendChild(style);
        }

        const wrapper = document.createElement('div');
        wrapper.innerHTML = ACCOUNT_HTML;

        const page = wrapper.querySelector('#page-account');
        const modals = wrapper.querySelectorAll('.acc-modal-overlay');
        const ordersPage = wrapper.querySelector('#accOrdersPage');
        const detailPage = wrapper.querySelector('#accOrderDetailPage');
        const nav = host.querySelector('#bottomNav');

        if (page) {
            page.classList.remove('active');
            page.style.display = 'none';
            if (nav) host.insertBefore(page, nav);
            else host.appendChild(page);
        }
        modals.forEach(m => document.body.appendChild(m));
        if (ordersPage) document.body.appendChild(ordersPage);
        if (detailPage) document.body.appendChild(detailPage);
    }

    // ============================================
    // ===== DATA =====
    // ============================================
    const accountData = {
        name: 'مستخدم REDEEM',
        email: 'user@redeemstore.com',
        phone: '+249901839168',
        orders: 5,
        points: 250,
        twoFactor: false
    };

    let accountInitialized = false;

    function showToast(message, type = 'success') {
        let toast = document.getElementById('accToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'accToast';
            document.body.appendChild(toast);
        }
        toast.style.background = type === 'error' ? '#EF4444' : '#10B981';
        toast.textContent = message;
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });
        clearTimeout(window.__accToastTimer);
        window.__accToastTimer = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(-100px)';
        }, 2500);
    }

    function renderAccountInfo() {
        const map = { infoName: accountData.name, infoEmail: accountData.email, infoPhone: accountData.phone, accountName: accountData.name, accountPhone: accountData.phone };
        Object.keys(map).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = map[id];
        });
        const so = document.getElementById('statOrders');
        if (so) so.textContent = accountData.orders;
    }

    // ===== MODALS =====
    const accModal = {
        overlay: null, currentField: null, currentType: 'text',
        init() {
            this.overlay = document.getElementById('accInputModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            document.getElementById('accModalCancel').addEventListener('click', () => this.close());
            document.getElementById('accModalConfirm').addEventListener('click', () => this.save());
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
            document.getElementById('accModalInput').addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.save();
                if (e.key === 'Escape') this.close();
            });
        },
        open(config) {
            if (!this.overlay) this.overlay = document.getElementById('accInputModal');
            if (!this.overlay) return;
            document.getElementById('accModalTitle').textContent = config.title;
            document.getElementById('accModalSubtitle').textContent = config.subtitle || '';
            document.getElementById('accModalIcon').innerHTML = `<i class="${config.icon || 'fas fa-pen'}"></i>`;
            document.getElementById('accModalInputIcon').className = config.inputIcon || 'fas fa-pen';
            const input = document.getElementById('accModalInput');
            input.value = config.value || '';
            input.placeholder = config.placeholder || '';
            input.type = config.type || 'text';
            this.currentField = config.field;
            this.currentType = config.type || 'text';
            if (config.type === 'email' || config.type === 'tel') {
                input.style.direction = 'ltr'; input.style.textAlign = 'left';
            } else {
                input.style.direction = 'rtl'; input.style.textAlign = 'right';
            }
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            setTimeout(() => { input.focus(); if (input.value) input.select(); }, 250);
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } },
        save() {
            const input = document.getElementById('accModalInput');
            const value = input.value.trim();
            if (!value) { input.style.borderColor = '#EF4444'; setTimeout(() => input.style.borderColor = '', 800); return; }
            if (this.currentType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showToast('⚠️ أدخل بريد إلكتروني صحيح', 'error');
                input.style.borderColor = '#EF4444';
                setTimeout(() => input.style.borderColor = '', 800);
                return;
            }
            if (this.currentField === 'name') { accountData.name = value; showToast('✅ تم تحديث الاسم'); }
            if (this.currentField === 'email') { accountData.email = value; showToast('✅ تم تحديث البريد'); }
            if (this.currentField === 'phone') { accountData.phone = value; showToast('✅ تم تحديث الرقم'); }
            renderAccountInfo();
            this.close();
        }
    };

    const passModal = {
        overlay: null,
        init() {
            this.overlay = document.getElementById('accPasswordModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            document.getElementById('passCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('passSaveBtn').addEventListener('click', () => this.save());
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
        },
        open() {
            if (!this.overlay) this.overlay = document.getElementById('accPasswordModal');
            ['oldPassword', 'newPassword', 'confirmPassword'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } },
        save() {
            const o = document.getElementById('oldPassword').value;
            const n = document.getElementById('newPassword').value;
            const c = document.getElementById('confirmPassword').value;
            if (!o || n.length < 6 || n !== c) {
                showToast('⚠️ تحقق من البيانات (6 أحرف على الأقل + تطابق)', 'error');
                return;
            }
            this.close();
            showToast('✅ تم تغيير كلمة المرور بنجاح');
        }
    };

    const twoFAModal = {
        overlay: null, step: 1,
        init() {
            this.overlay = document.getElementById('acc2faModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            this.overlay.querySelectorAll('[data-method]').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.overlay.querySelectorAll('[data-method]').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                });
            });
            document.getElementById('acc2faCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('acc2faNextBtn').addEventListener('click', () => this.next());
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
        },
        open() {
            if (!this.overlay) this.overlay = document.getElementById('acc2faModal');
            this.step = 1;
            document.getElementById('acc2faStep1').style.display = 'block';
            document.getElementById('acc2faStep2').style.display = 'none';
            document.getElementById('acc2faStep3').style.display = 'none';
            document.getElementById('otpCode').value = '';
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } },
        next() {
            if (this.step === 1) {
                this.step = 2;
                document.getElementById('acc2faStep1').style.display = 'none';
                document.getElementById('acc2faStep2').style.display = 'block';
                setTimeout(() => document.getElementById('otpCode').focus(), 200);
            } else if (this.step === 2) {
                const code = document.getElementById('otpCode').value.trim();
                if (code.length !== 6) { showToast('⚠️ أدخل 6 أرقام', 'error'); return; }
                const codes = [];
                const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
                for (let i = 0; i < 8; i++) {
                    let c = '';
                    for (let j = 0; j < 8; j++) { c += chars[Math.floor(Math.random() * chars.length)]; if (j === 3) c += '-'; }
                    codes.push(c);
                }
                const list = document.getElementById('backupCodesList');
                if (list) list.innerHTML = codes.map(cc => `<div style="background:#FFF;border:1px solid #E8EAED;border-radius:8px;padding:8px;font-weight:700;text-align:center;">${cc}</div>`).join('');
                this.step = 3;
                document.getElementById('acc2faStep2').style.display = 'none';
                document.getElementById('acc2faStep3').style.display = 'block';
                accountData.twoFactor = true;
                const tg = document.getElementById('toggleTwoFactor');
                if (tg) tg.checked = true;
                showToast('✅ تم تفعيل التحقق بخطوتين');
            } else { this.close(); }
        }
    };

    const langModal = {
        overlay: null, currentLang: 'ar',
        init() {
            this.overlay = document.getElementById('accLangModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            this.currentLang = localStorage.getItem('redeem_lang') || 'ar';
            this.updateSelection();
            this.overlay.querySelectorAll('.acc-lang-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    const lang = opt.dataset.lang;
                    if (lang === this.currentLang) { this.close(); return; }
                    this.changeLang(lang);
                });
            });
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
        },
        open() {
            if (!this.overlay) this.overlay = document.getElementById('accLangModal');
            this.updateSelection();
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } },
        updateSelection() {
            if (!this.overlay) return;
            this.overlay.querySelectorAll('.acc-lang-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.lang === this.currentLang);
            });
        },
        changeLang(lang) {
            this.currentLang = lang;
            this.updateSelection();
            localStorage.setItem('redeem_lang', lang);
            document.dispatchEvent(new CustomEvent('language:change', { detail: { lang } }));
            if (window.i18n && window.i18n.setLang) window.i18n.setLang(lang);
            const lbl = document.getElementById('currentLanguageLabel');
            if (lbl) lbl.textContent = lang === 'ar' ? 'العربية' : 'English';
            showToast(lang === 'ar' ? '✅ تم تغيير اللغة إلى العربية' : '✅ Language changed to English');
            setTimeout(() => this.close(), 400);
        }
    };

    const aboutModal = {
        overlay: null,
        init() {
            this.overlay = document.getElementById('accAboutModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            document.getElementById('accAboutCloseBtn').addEventListener('click', () => this.close());
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
        },
        open() {
            if (!this.overlay) this.overlay = document.getElementById('accAboutModal');
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } }
    };

    const confirmModal = {
        overlay: null, onConfirm: null,
        init() {
            this.overlay = document.getElementById('accConfirmModal');
            if (!this.overlay || this.overlay.dataset.bound) return;
            this.overlay.dataset.bound = '1';
            document.getElementById('confirmCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('confirmOkBtn').addEventListener('click', () => {
                const cb = this.onConfirm;
                this.close();
                if (cb) cb();
            });
            this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
        },
        open(config) {
            if (!this.overlay) this.overlay = document.getElementById('accConfirmModal');
            document.getElementById('confirmTitle').textContent = config.title || 'هل أنت متأكد؟';
            document.getElementById('confirmSubtitle').textContent = config.subtitle || '';
            this.onConfirm = config.onConfirm;
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },
        close() { if (this.overlay) { this.overlay.classList.remove('open'); document.body.style.overflow = ''; } }
    };

    const toggleSystem = {
        init() {
            document.querySelectorAll('.acc-toggle input[type="checkbox"]').forEach(input => {
                if (input.dataset.bound) return;
                input.dataset.bound = '1';
                const key = input.dataset.key;
                if (key === 'two-factor') {
                    input.addEventListener('change', function (e) {
                        e.stopPropagation();
                        if (this.checked) {
                            this.checked = false;
                            setTimeout(() => twoFAModal.open(), 50);
                        } else {
                            confirmModal.open({
                                title: 'تعطيل التحقق بخطوتين؟',
                                subtitle: 'سيقل مستوى حماية حسابك',
                                onConfirm: () => {
                                    accountData.twoFactor = false;
                                    document.getElementById('toggleTwoFactor').checked = false;
                                    showToast('✅ تم تعطيل التحقق بخطوتين');
                                }
                            });
                        }
                    });
                    return;
                }
                input.addEventListener('change', (e) => {
                    if (key === 'notifications') {
                        showToast(e.target.checked ? '🔔 تم تفعيل الإشعارات' : '🔕 تم تعطيل الإشعارات');
                    }
                });
            });
        }
    };

    // ============================================
    // ===== ORDERS DATA =====
    // ============================================
    const ordersData = [
        {
            id: 'RDM-2026-001248', date: '2026-07-14T14:30:00', status: 'processing',
            product: { name: 'PUBG Mobile - 660 UC', desc: 'شحن فوري عبر ID', img: 'https://i.ibb.co/GQh2zJnh/IMG-20260705-WA0100.jpg', qty: 1, unitPrice: 9.30 },
            subtotal: 9.30, discount: 0, tax: 0, total: 9.30,
            payment: { method: 'المحفظة', status: 'paid' },
            customer: { name: 'مستخدم REDEEM', playerId: '5182736451', whatsapp: '+249901839168' },
            timeline: [
                { label: 'تم استلام الطلب', date: '2026-07-14 14:30', done: true },
                { label: 'قيد التنفيذ', date: '2026-07-14 14:35', done: true, current: true },
                { label: 'تم التسليم', date: '—', done: false },
                { label: 'مكتمل', date: '—', done: false }
            ]
        },
        {
            id: 'RDM-2026-001247', date: '2026-07-13T22:15:00', status: 'completed',
            product: { name: 'Netflix - الباقة المميزة', desc: 'اشتراك شهري - 4K UHD', img: 'https://i.postimg.cc/G3YG2D6F/IMG-20260705-WA0096.jpg', qty: 1, unitPrice: 15.99 },
            subtotal: 15.99, discount: 0, tax: 0, total: 15.99,
            payment: { method: 'بنكك', status: 'paid' },
            customer: { name: 'مستخدم REDEEM', playerId: 'user@redeemstore.com', whatsapp: '+249901839168' },
            timeline: [
                { label: 'تم استلام الطلب', date: '2026-07-13 22:15', done: true },
                { label: 'قيد التنفيذ', date: '2026-07-13 22:18', done: true },
                { label: 'تم التسليم', date: '2026-07-13 22:25', done: true },
                { label: 'مكتمل', date: '2026-07-13 22:25', done: true, current: true }
            ]
        },
        {
            id: 'RDM-2026-001246', date: '2026-07-12T18:45:00', status: 'completed',
            product: { name: 'Free Fire - 1000 جوهرة', desc: 'شحن عبر ID', img: 'https://i.postimg.cc/xjp4XhFM/IMG-20260705-WA0099.jpg', qty: 1, unitPrice: 8.50 },
            subtotal: 8.50, discount: 0, tax: 0, total: 8.50,
            payment: { method: 'ماي كاشي', status: 'paid' },
            customer: { name: 'مستخدم REDEEM', playerId: '882736451', whatsapp: '+249901839168' },
            timeline: [
                { label: 'تم استلام الطلب', date: '2026-07-12 18:45', done: true },
                { label: 'قيد التنفيذ', date: '2026-07-12 18:48', done: true },
                { label: 'تم التسليم', date: '2026-07-12 18:55', done: true },
                { label: 'مكتمل', date: '2026-07-12 18:55', done: true, current: true }
            ]
        },
        {
            id: 'RDM-2026-001245', date: '2026-07-11T09:30:00', status: 'pending',
            product: { name: 'Clash of Clans - 6500 جوهرة', desc: 'في انتظار تأكيد الدفع', img: 'https://i.postimg.cc/pV8HzK39/IMG-20260705-WA0101.jpg', qty: 1, unitPrice: 28.00 },
            subtotal: 28.00, discount: 0, tax: 0, total: 28.00,
            payment: { method: 'بنكك', status: 'pending' },
            customer: { name: 'مستخدم REDEEM', playerId: 'supercell_xyz', whatsapp: '+249901839168' },
            timeline: [
                { label: 'تم استلام الطلب', date: '2026-07-11 09:30', done: true, current: true },
                { label: 'قيد التنفيذ', date: '—', done: false },
                { label: 'تم التسليم', date: '—', done: false },
                { label: 'مكتمل', date: '—', done: false }
            ]
        },
        {
            id: 'RDM-2026-001244', date: '2026-07-10T16:20:00', status: 'cancelled',
            product: { name: 'Spotify - اشتراك العائلة', desc: 'تم إلغاء الطلب بناءً على طلبك', img: 'https://i.postimg.cc/N09Lnqcw/file-00000000881c81f4b80e343797332ff6.png', qty: 1, unitPrice: 7.99 },
            subtotal: 7.99, discount: 0, tax: 0, total: 7.99,
            payment: { method: 'المحفظة', status: 'failed' },
            customer: { name: 'مستخدم REDEEM', playerId: 'user@redeemstore.com', whatsapp: '+249901839168' },
            timeline: [
                { label: 'تم استلام الطلب', date: '2026-07-10 16:20', done: true },
                { label: 'قيد التنفيذ', date: '2026-07-10 16:25', done: false },
                { label: 'ملغي', date: '2026-07-10 16:30', done: true, current: true }
            ]
        }
    ];

    // ============================================
    // ===== ORDERS PAGE =====
    // ============================================
    const ordersPage = {
        page: null, detailPage: null, currentFilter: 'all', activeOrderId: null,

        init() {
            this.page = document.getElementById('accOrdersPage');
            this.detailPage = document.getElementById('accOrderDetailPage');
            if (!this.page || this.page.dataset.bound) return;
            this.page.dataset.bound = '1';

            document.getElementById('accOrdersBackBtn').addEventListener('click', () => this.close());
            document.getElementById('accOrderDetailBackBtn').addEventListener('click', () => {
                this.detailPage.classList.remove('active');
            });

            this.page.querySelectorAll('.acc-orders-filter').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.page.querySelectorAll('.acc-orders-filter').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.currentFilter = btn.dataset.filter;
                    this.renderList();
                });
            });

            const emptyBtn = document.getElementById('accOrdersEmptyBtn');
            if (emptyBtn) {
                emptyBtn.addEventListener('click', () => {
                    this.close();
                    if (window.switchPage) window.switchPage('page-home');
                    if (window.updateNavActive) window.updateNavActive('page-home');
                });
            }

            this.updateCounts();
        },

        open() {
            if (!this.page) this.init();
            this.updateCounts();
            this.renderList();
            this.page.classList.add('active');
        },

        close() {
            if (this.page) this.page.classList.remove('active');
            if (this.detailPage) this.detailPage.classList.remove('active');
            document.dispatchEvent(new CustomEvent('orders:closed'));
        },

        updateCounts() {
            const counts = {
                all: ordersData.length,
                pending: ordersData.filter(o => o.status === 'pending').length,
                processing: ordersData.filter(o => o.status === 'processing').length,
                completed: ordersData.filter(o => o.status === 'completed').length,
                cancelled: ordersData.filter(o => o.status === 'cancelled').length
            };
            const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
            set('fAll', counts.all);
            set('fPending', counts.pending);
            set('fProcessing', counts.processing);
            set('fCompleted', counts.completed);
            set('fCancelled', counts.cancelled);
            const totalEl = document.getElementById('accOrdersCount');
            if (totalEl) totalEl.textContent = counts.all + ' طلب';
        },

        getStatusInfo(status) {
            return {
                pending: { label: 'قيد الانتظار', icon: 'fa-clock' },
                processing: { label: 'قيد التنفيذ', icon: 'fa-spinner' },
                completed: { label: 'مكتمل', icon: 'fa-check' },
                cancelled: { label: 'ملغي', icon: 'fa-times' }
            }[status] || { label: status, icon: 'fa-circle' };
        },

        renderList() {
            const list = document.getElementById('accOrdersList');
            const empty = document.getElementById('accOrdersEmpty');
            if (!list) return;

            let filtered = ordersData;
            if (this.currentFilter !== 'all') {
                filtered = filtered.filter(o => o.status === this.currentFilter);
            }

            if (filtered.length === 0) {
                list.innerHTML = '';
                if (empty) empty.classList.add('show');
                return;
            }
            if (empty) empty.classList.remove('show');

            list.innerHTML = filtered.map(o => {
                const s = this.getStatusInfo(o.status);
                const d = new Date(o.date);
                const dateStr = d.toLocaleDateString('ar-EG') + ' ' + d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
                return `
                    <div class="acc-order-card" data-id="${o.id}">
                        <div class="acc-order-top">
                            <span class="acc-order-id">${o.id}</span>
                            <span class="acc-order-status ${o.status}"><i class="fas ${s.icon}"></i> ${s.label}</span>
                        </div>
                        <div class="acc-order-body">
                            <div class="acc-order-thumb"><img src="${o.product.img}" alt=""></div>
                            <div class="acc-order-info">
                                <div class="acc-order-name">${o.product.name}</div>
                                <div class="acc-order-desc">${o.product.desc}</div>
                                <div class="acc-order-date"><i class="fas fa-clock"></i> ${dateStr}</div>
                            </div>
                        </div>
                        <div class="acc-order-footer">
                            <div>
                                <span class="acc-order-total-label">الإجمالي</span>
                                <span class="acc-order-total">$${o.total.toFixed(2)}</span>
                            </div>
                            <div class="acc-order-actions">
                                <button class="acc-order-btn" data-action="download" data-id="${o.id}"><i class="fas fa-download"></i></button>
                                <button class="acc-order-btn primary" data-action="view" data-id="${o.id}"><i class="fas fa-chevron-left"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            list.querySelectorAll('.acc-order-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (e.target.closest('.acc-order-btn')) return;
                    this.openDetail(card.dataset.id);
                });
            });
            list.querySelectorAll('.acc-order-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = btn.dataset.action;
                    const id = btn.dataset.id;
                    if (action === 'download') this.downloadOrder(id);
                    if (action === 'view') this.openDetail(id);
                });
            });
        },

        openDetail(orderId) {
            this.activeOrderId = orderId;
            const order = ordersData.find(o => o.id === orderId);
            if (!order || !this.detailPage) return;

            const s = this.getStatusInfo(order.status);
            const body = document.getElementById('accOrderDetailBody');
            const actions = document.getElementById('accOrderDetailActions');
            const headerId = document.getElementById('accOrderDetailId');

            const d = new Date(order.date);
            const dateStr = d.toLocaleDateString('ar-EG') + ' ' + d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
            const payStatus = { paid: 'مدفوع', pending: 'قيد الانتظار', failed: 'فشل' }[order.payment.status] || order.payment.status;

            if (headerId) headerId.textContent = order.id;

            body.innerHTML = `
                <div class="acc-detail-status-card status-${order.status}">
                    <div class="acc-detail-status-icon"><i class="fas ${s.icon}"></i></div>
                    <h3 class="acc-detail-status-title">${s.label}</h3>
                    <p class="acc-detail-status-sub">${order.product.desc}</p>
                </div>

                <div class="acc-detail-section">
                    <div class="acc-detail-section-title"><i class="fas fa-shipping-fast"></i> مسار الطلب</div>
                    <div class="acc-progress-steps">
                        <div class="acc-progress-line"></div>
                        ${order.timeline.map(t => `
                            <div class="acc-progress-step ${t.done ? 'done' : ''} ${t.current ? 'current' : ''}">
                                <div class="acc-progress-step-dot"><i class="fas fa-check"></i></div>
                                <div class="acc-progress-step-label">${t.label}</div>
                                <div class="acc-progress-step-date">${t.date}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="acc-detail-section">
                    <div class="acc-detail-section-title"><i class="fas fa-box"></i> تفاصيل المنتج</div>
                    <div class="acc-detail-product">
                        <div class="acc-detail-product-thumb"><img src="${order.product.img}" alt=""></div>
                        <div class="acc-detail-product-info">
                            <h5>${order.product.name}</h5>
                            <p>${order.product.desc} • الكمية: ${order.product.qty}</p>
                        </div>
                        <div class="acc-detail-product-price">$${order.product.unitPrice.toFixed(2)}</div>
                    </div>
                </div>

                <div class="acc-detail-section">
                    <div class="acc-detail-section-title"><i class="fas fa-user"></i> بيانات العميل</div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">الاسم:</span><span class="acc-detail-row-value">${order.customer.name}</span></div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">معرف الحساب:</span><span class="acc-detail-row-value ltr">${order.customer.playerId}</span></div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">واتساب:</span><span class="acc-detail-row-value ltr">${order.customer.whatsapp}</span></div>
                </div>

                <div class="acc-detail-section">
                    <div class="acc-detail-section-title"><i class="fas fa-receipt"></i> الفاتورة</div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">المجموع الفرعي:</span><span class="acc-detail-row-value">$${order.subtotal.toFixed(2)}</span></div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">الخصم:</span><span class="acc-detail-row-value">-$${order.discount.toFixed(2)}</span></div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">الضريبة:</span><span class="acc-detail-row-value">$${order.tax.toFixed(2)}</span></div>
                    <div class="acc-detail-row total"><span class="acc-detail-row-label">الإجمالي:</span><span class="acc-detail-row-value">$${order.total.toFixed(2)}</span></div>
                </div>

                <div class="acc-detail-section">
                    <div class="acc-detail-section-title"><i class="fas fa-credit-card"></i> الدفع</div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">الطريقة:</span><span class="acc-detail-row-value">${order.payment.method}</span></div>
                    <div class="acc-detail-row"><span class="acc-detail-row-label">الحالة:</span><span class="acc-detail-row-value">${payStatus}</span></div>
                </div>
            `;

            actions.innerHTML = `
                <button class="acc-detail-btn secondary" data-action="download"><i class="fas fa-download"></i> تحميل</button>
                <button class="acc-detail-btn primary" data-action="print"><i class="fas fa-print"></i> طباعة</button>
            `;

            actions.querySelectorAll('.acc-detail-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const a = btn.dataset.action;
                    if (a === 'download') this.downloadOrder(this.activeOrderId);
                    if (a === 'print') this.printOrder(this.activeOrderId);
                });
            });

            this.detailPage.classList.add('active');
        },

        downloadOrder(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            const statusMap = { pending: 'قيد الانتظار', processing: 'قيد التنفيذ', completed: 'مكتمل', cancelled: 'ملغي' };
            const payStatusMap = { paid: 'مدفوع ✅', pending: 'قيد الانتظار ⏳', failed: 'فشل ❌' };
            const line = '════════════════════════════════════════';
            const dash = '────────────────────────────────────────';
            const d = new Date(order.date);
            const dateStr = d.toLocaleDateString('ar-EG');
            const timeStr = d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

            const content = `
${line}
         REDEEM STORE - فاتورة طلب
${line}

┌─── معلومات الطلب ──────────────────
│
│  🔢 رقم الطلب:        ${order.id}
│  📅 التاريخ:          ${dateStr}
│  🕒 الوقت:            ${timeStr}
│  📌 الحالة:           ${statusMap[order.status]}
│
└────────────────────────────────────

┌─── بيانات العميل ──────────────────
│
│  👤 اسم العميل:       ${order.customer.name}
│  🆔 معرف الحساب:      ${order.customer.playerId}
│  📱 رقم واتساب:       ${order.customer.whatsapp}
│
└────────────────────────────────────

┌─── تفاصيل المنتج ──────────────────
│
│  📦 المنتج:           ${order.product.name}
│  📝 الوصف:            ${order.product.desc}
│  🔢 الكمية:           ${order.product.qty}
│  💵 سعر الوحدة:       $${order.product.unitPrice.toFixed(2)}
│  💰 الإجمالي:         $${(order.product.qty * order.product.unitPrice).toFixed(2)}
│
└────────────────────────────────────

┌─── الفاتورة ───────────────────────
│
│  المجموع الفرعي:     $${order.subtotal.toFixed(2)}
│  الخصم:              -$${order.discount.toFixed(2)}
│  الضريبة:            $${order.tax.toFixed(2)}
│
${dash}
│  💵 الإجمالي النهائي: $${order.total.toFixed(2)}
${dash}
│
└────────────────────────────────────

┌─── طريقة الدفع ────────────────────
│
│  💳 الطريقة:          ${order.payment.method}
│  📊 حالة الدفع:       ${payStatusMap[order.payment.status]}
│
└────────────────────────────────────

${line}
      شكراً لتعاملك مع REDEEM STORE
          📞 wa.me/249901839168
${line}
            `;

            const blob = new Blob(['\ufeff' + content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `REDEEM-Invoice-${order.id}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('📥 تم تحميل الفاتورة');
        },

        printOrder(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            const statusMap = { pending: 'قيد الانتظار', processing: 'قيد التنفيذ', completed: 'مكتمل', cancelled: 'ملغي' };
            const payStatusMap = { paid: 'مدفوع', pending: 'قيد الانتظار', failed: 'فشل' };
            const d = new Date(order.date);
            const dateStr = d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
            const timeStr = d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

            const win = window.open('', '_blank');
            win.document.write(`
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="UTF-8" />
<title>فاتورة ${order.id}</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; padding: 40px; color: #1A1A2E; direction: rtl; background: #FFF; }
.header { text-align: center; padding-bottom: 20px; border-bottom: 3px solid #1A73E8; margin-bottom: 24px; }
.logo { font-size: 34px; font-weight: 900; color: #1A73E8; letter-spacing: 1px; }
.logo span { color: #00BCD4; }
.subtitle { font-size: 13px; color: #888; margin-top: 6px; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; padding: 18px; background: #F5F7FA; border-radius: 12px; }
.info-item label { display: block; font-size: 11px; color: #888; margin-bottom: 4px; font-weight: 600; }
.info-item .value { font-size: 14px; font-weight: 700; color: #1A1A2E; direction: ltr; text-align: right; }
.section { margin-bottom: 20px; padding: 16px; border: 1px solid #E8EAED; border-radius: 12px; }
.section-title { font-size: 13px; font-weight: 800; color: #1A73E8; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #E8EAED; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 12px 10px; text-align: right; font-size: 13px; border-bottom: 1px solid #E8EAED; }
th { background: #1A73E8; color: #FFF; font-weight: 700; font-size: 12px; }
.total-row { background: #F5F9FF; font-weight: 800; }
.total-row td { color: #1A73E8; padding: 14px 10px; font-size: 16px; }
.status-badge { display: inline-block; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 700; background: #E8F0FE; color: #1A73E8; }
.status-badge.paid { background: #D1FAE5; color: #065F46; }
.footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px dashed #E8EAED; color: #888; font-size: 12px; line-height: 1.8; }
@media print { body { padding: 20px; } }
</style>
</head>
<body>
<div class="header">
    <div class="logo">RE<span>DEM</span> STORE</div>
    <div class="subtitle">فاتورة طلب رسمية</div>
</div>
<div class="info-grid">
    <div class="info-item"><label>رقم الطلب</label><div class="value">${order.id}</div></div>
    <div class="info-item"><label>التاريخ</label><div class="value">${dateStr} - ${timeStr}</div></div>
    <div class="info-item"><label>حالة الطلب</label><span class="status-badge">${statusMap[order.status]}</span></div>
    <div class="info-item"><label>طريقة الدفع</label><div class="value">${order.payment.method}</div></div>
</div>
<div class="section">
    <div class="section-title">👤 بيانات العميل</div>
    <div class="info-grid" style="margin:0;background:transparent;padding:0;">
        <div class="info-item"><label>الاسم</label><div class="value" style="direction:rtl;">${order.customer.name}</div></div>
        <div class="info-item"><label>معرف الحساب</label><div class="value">${order.customer.playerId}</div></div>
        <div class="info-item"><label>واتساب</label><div class="value">${order.customer.whatsapp}</div></div>
        <div class="info-item"><label>حالة الدفع</label><span class="status-badge ${order.payment.status}">${payStatusMap[order.payment.status]}</span></div>
    </div>
</div>
<div class="section">
    <div class="section-title">📦 تفاصيل المنتج</div>
    <table>
        <thead><tr><th>المنتج</th><th>الكمية</th><th>سعر الوحدة</th><th>الإجمالي</th></tr></thead>
        <tbody>
            <tr>
                <td><strong>${order.product.name}</strong><br/><small style="color:#888;">${order.product.desc}</small></td>
                <td>${order.product.qty}</td>
                <td>$${order.product.unitPrice.toFixed(2)}</td>
                <td>$${(order.product.qty * order.product.unitPrice).toFixed(2)}</td>
            </tr>
            <tr><td colspan="3" style="text-align:left;">المجموع الفرعي</td><td>$${order.subtotal.toFixed(2)}</td></tr>
            <tr><td colspan="3" style="text-align:left;">الخصم</td><td>-$${order.discount.toFixed(2)}</td></tr>
            <tr><td colspan="3" style="text-align:left;">الضريبة</td><td>$${order.tax.toFixed(2)}</td></tr>
            <tr class="total-row"><td colspan="3" style="text-align:left;">الإجمالي النهائي</td><td>$${order.total.toFixed(2)}</td></tr>
        </tbody>
    </table>
</div>
<div class="footer">
    شكراً لتعاملك مع REDEEM STORE<br/>
    للتواصل: wa.me/249901839168<br/>
    © 2026 جميع الحقوق محفوظة
</div>
<script>window.onload=()=>{setTimeout(()=>window.print(),400)};<\/script>
</body>
</html>
            `);
            win.document.close();
        }
    };

    // ============================================
    // ===== ACTIONS =====
    // ============================================
    function handleAccountAction(action) {
        switch (action) {
            case 'edit-name': accModal.open({ title: 'تعديل الاسم', subtitle: 'أدخل اسمك الكامل الجديد', icon: 'fas fa-user', inputIcon: 'fas fa-user', value: accountData.name, type: 'text', field: 'name' }); break;
            case 'edit-email': accModal.open({ title: 'تعديل البريد الإلكتروني', subtitle: 'أدخل بريدك الإلكتروني الجديد', icon: 'fas fa-envelope', inputIcon: 'fas fa-envelope', value: accountData.email, type: 'email', field: 'email' }); break;
            case 'edit-phone': accModal.open({ title: 'تعديل رقم واتساب', subtitle: 'أدخل رقم الواتساب الجديد', icon: 'fab fa-whatsapp', inputIcon: 'fab fa-whatsapp', value: accountData.phone, type: 'tel', field: 'phone' }); break;
            case 'change-password': passModal.open(); break;
            case 'my-orders':
                if (!ordersPage.page) ordersPage.init();
                ordersPage.open();
                break;
            case 'language': langModal.open(); break;
            case 'about': aboutModal.open(); break;
        }
    }

    function bindEvents() {
        document.querySelectorAll('#page-account .account-item[data-action]').forEach(item => {
            if (item.dataset.bound) return;
            item.dataset.bound = '1';
            const action = item.dataset.action;
            item.addEventListener('click', function (e) {
                if (e.target.closest('.acc-toggle')) return;
                handleAccountAction(action);
            });
        });

        const logoutBtn = document.getElementById('accountLogoutBtn');
        if (logoutBtn && !logoutBtn.dataset.bound) {
            logoutBtn.dataset.bound = '1';
            logoutBtn.addEventListener('click', () => {
                confirmModal.open({
                    title: 'تسجيل الخروج؟',
                    subtitle: 'هل أنت متأكد من تسجيل الخروج؟',
                    onConfirm: () => showToast('👋 تم تسجيل الخروج بنجاح')
                });
            });
        }

        const avatarBtn = document.getElementById('avatarEditBtn');
        if (avatarBtn && !avatarBtn.dataset.bound) {
            avatarBtn.dataset.bound = '1';
            avatarBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const input = document.createElement('input');
                input.type = 'file'; input.accept = 'image/*';
                input.onchange = (ev) => {
                    const file = ev.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (re) => {
                            const av = document.getElementById('accountAvatar');
                            if (av) av.innerHTML = `<img src="${re.target.result}" alt="" />`;
                        };
                        reader.readAsDataURL(file);
                    }
                };
                input.click();
            });
        }
    }

    function initAccount() {
        if (accountInitialized) { bindEvents(); return; }
        accModal.init();
        passModal.init();
        twoFAModal.init();
        langModal.init();
        aboutModal.init();
        confirmModal.init();
        toggleSystem.init();
        ordersPage.init();
        renderAccountInfo();
        bindEvents();
        accountInitialized = true;
    }

    // ============================================
    // ===== EXPOSE + START =====
    // ============================================
    window.redeemAccount = { init: initAccount, showToast: showToast };

    // Mount + initialize the account page immediately.
    // The account UI is prepared before the user can open it, so navigation
    // does not wait for a fetch, timeout, or a second initialization pass.
    // No visual effects/transitions are changed here.
    mountAccountPage();
    initAccount();

    // ===== زر "طلباتي" في الشريط السفلي =====
    document.addEventListener('click', function (e) {
        const ordersBtn = e.target.closest('.nav-item[data-page="orders"]');
        if (!ordersBtn) return;

        e.preventDefault();
        e.stopPropagation();

        // حدّث حالة الأزرار
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        ordersBtn.classList.add('active');

        // حرّك المؤشر الأزرق
        const navIndicator = document.getElementById('navIndicator');
        const bottomNav = document.querySelector('.bottom-nav');
        if (navIndicator && bottomNav) {
            const navRect = bottomNav.getBoundingClientRect();
            const itemRect = ordersBtn.getBoundingClientRect();
            const leftPos = itemRect.left - navRect.left + (itemRect.width / 2) - 15;
            navIndicator.style.left = leftPos + 'px';
            navIndicator.style.width = '30px';
            navIndicator.classList.add('show');
        }

        // افتح صفحة الطلبات
        if (!ordersPage.page) ordersPage.init();
        ordersPage.open();
    }, true);

    // عند إغلاق صفحة الطلبات → رجّع التحديد للحساب
    document.addEventListener('orders:closed', function () {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const accountBtn = document.querySelector('.nav-item[data-page="page-account"]');
        if (accountBtn) {
            accountBtn.classList.add('active');
            const navIndicator = document.getElementById('navIndicator');
            const bottomNav = document.querySelector('.bottom-nav');
            if (navIndicator && bottomNav) {
                const navRect = bottomNav.getBoundingClientRect();
                const itemRect = accountBtn.getBoundingClientRect();
                const leftPos = itemRect.left - navRect.left + (itemRect.width / 2) - 15;
                navIndicator.style.left = leftPos + 'px';
            }
        }
    });

    console.log('🚀 Account Page Loaded');
})();