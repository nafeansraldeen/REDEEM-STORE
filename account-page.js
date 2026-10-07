/*
 * REDEEM STORE - Account Page Component
 *
 * هذا الملف يجهز صفحة الحساب مسبقًا داخل نفس الصفحة (DOM) أثناء فتح المتجر.
 * عند الضغط على "الحساب" لا يتم فتح account.html ولا إعادة تحميل الموقع.
 * جميع تأثيرات صفحة الحساب الأصلية وHTML/JS الخاص بها محفوظة.
 */
(function () {
    'use strict';

    const ACCOUNT_CSS = "/* ===== ACCOUNT PAGE ===== */\n/* ============================================ */\n#page-account {\n    padding: 0 0 30px 0;\n    background: #F5F7FA;\n}\n\n.account-hero {\n    background: linear-gradient(145deg, #1A73E8, #0D47A1);\n    padding: 32px 24px 60px;\n    border-radius: 0 0 32px 32px;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n    margin-bottom: -40px;\n}\n\n.account-hero::after {\n    content: '';\n    position: absolute;\n    top: -60px;\n    right: -60px;\n    width: 180px;\n    height: 180px;\n    background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.account-hero::before {\n    content: '';\n    position: absolute;\n    bottom: -50px;\n    left: -50px;\n    width: 140px;\n    height: 140px;\n    background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.account-avatar-wrapper {\n    position: relative;\n    display: inline-block;\n    z-index: 2;\n    margin-bottom: 12px;\n}\n\n.account-avatar {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 4px solid rgba(255,255,255,0.25);\n    background: #FFFFFF;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 42px;\n    color: #1A73E8;\n    overflow: hidden;\n    box-shadow: 0 8px 24px rgba(0,0,0,0.2);\n}\n\n.account-avatar img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.account-avatar-edit {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background: #FFFFFF;\n    color: #1A73E8;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    cursor: pointer;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n    transition: all 0.25s ease;\n}\n\n.account-avatar-edit:active {\n    transform: scale(0.9);\n}\n\n.account-name {\n    font-size: 22px;\n    font-weight: 800;\n    color: #FFFFFF;\n    position: relative;\n    z-index: 2;\n    margin: 0;\n}\n\n.account-phone {\n    font-size: 14px;\n    color: rgba(255,255,255,0.8);\n    position: relative;\n    z-index: 2;\n    margin-top: 4px;\n    font-weight: 400;\n    direction: ltr;\n    unicode-bidi: plaintext;\n    text-align: center;\n    display: inline-block;\n    width: 100%;\n}\n\n.account-verified-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 5px;\n    background: rgba(255,255,255,0.15);\n    color: #FFFFFF;\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-size: 11px;\n    font-weight: 600;\n    margin-top: 10px;\n    position: relative;\n    z-index: 2;\n    backdrop-filter: blur(4px);\n    border: 1px solid rgba(255,255,255,0.12);\n}\n\n.account-verified-badge i {\n    color: #6EF3E8;\n    font-size: 12px;\n}\n\n.account-stats {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n    padding: 0 16px;\n    margin-bottom: 20px;\n    position: relative;\n    z-index: 3;\n}\n\n.account-stat-card {\n    background: #FFFFFF;\n    border-radius: 16px;\n    padding: 16px 8px;\n    text-align: center;\n    box-shadow: 0 4px 20px rgba(0,0,0,0.08);\n    border: 1px solid #f0f0f0;\n    transition: all 0.25s ease;\n}\n\n.account-stat-card:active {\n    transform: scale(0.97);\n}\n\n.account-stat-icon {\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 8px;\n    font-size: 18px;\n    background: #E8F0FE;\n    color: #1A73E8;\n}\n\n.account-stat-card:nth-child(2) .account-stat-icon {\n    background: rgba(245, 158, 11, 0.12);\n    color: #F59E0B;\n}\n\n.account-stat-value {\n    font-size: 18px;\n    font-weight: 800;\n    color: #1A1A2E;\n}\n\n.account-stat-label {\n    font-size: 11px;\n    color: #888;\n    font-weight: 500;\n    margin-top: 2px;\n}\n\n.account-body {\n    padding: 0 16px;\n}\n\n.account-section {\n    background: #FFFFFF;\n    border-radius: 18px;\n    margin-bottom: 16px;\n    box-shadow: 0 2px 12px rgba(0,0,0,0.05);\n    border: 1px solid #f0f0f0;\n    overflow: hidden;\n}\n\n.account-section-title {\n    font-size: 14px;\n    font-weight: 800;\n    color: #1A1A2E;\n    padding: 16px 18px 10px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.account-section-title i {\n    color: #1A73E8;\n    font-size: 15px;\n}\n\n.account-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px 18px;\n    border-top: 1px solid #f5f5f5;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.account-item:active {\n    background: #f8f9fa;\n}\n\n.account-item-left {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex: 1;\n    min-width: 0;\n}\n\n.account-item-icon {\n    width: 38px;\n    height: 38px;\n    border-radius: 11px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15px;\n    flex-shrink: 0;\n    background: #E8F0FE;\n    color: #1A73E8;\n}\n\n.account-item-icon.green { background: rgba(16,185,129,0.12); color: #10B981; }\n.account-item-icon.orange { background: rgba(245,158,11,0.12); color: #F59E0B; }\n.account-item-icon.red { background: rgba(239,68,68,0.10); color: #EF4444; }\n.account-item-icon.purple { background: rgba(139,92,246,0.12); color: #8B5CF6; }\n.account-item-icon.cyan { background: rgba(0,188,212,0.12); color: #00BCD4; }\n\n.account-item-info {\n    flex: 1;\n    min-width: 0;\n}\n\n.account-item-info h4 {\n    font-size: 14px;\n    font-weight: 600;\n    color: #1A1A2E;\n    margin: 0 0 2px;\n}\n\n.account-item-info p {\n    font-size: 12px;\n    color: #999;\n    margin: 0;\n    font-weight: 400;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.account-item-right {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-shrink: 0;\n}\n\n.account-item-right i.fa-chevron-left {\n    color: #bbb;\n    font-size: 13px;\n    transition: all 0.2s ease;\n}\n\n.account-item:active .account-item-right i.fa-chevron-left {\n    transform: translateX(-3px);\n    color: #1A73E8;\n}\n\n.account-logout {\n    margin: 8px 0 0;\n    width: 100%;\n    padding: 15px 20px;\n    background: #FFFFFF;\n    color: #EF4444;\n    border: 1.5px solid rgba(239,68,68,0.25);\n    border-radius: 14px;\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n    transition: all 0.25s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    font-family: inherit;\n}\n\n.account-logout:active {\n    background: rgba(239,68,68,0.06);\n    transform: scale(0.98);\n}\n\n.account-footer-note {\n    text-align: center;\n    padding: 20px 0 10px;\n    font-size: 11px;\n    color: #bbb;\n}\n\n.account-footer-note i {\n    color: #1A73E8;\n    margin: 0 3px;\n}\n\n/* ============================================ */\n/* ===== MODAL BASE ===== */\n/* ============================================ */\n.acc-modal-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.6);\n    backdrop-filter: blur(4px);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.25s ease, visibility 0.25s ease;\n    padding: 20px;\n}\n\n.acc-modal-overlay.open {\n    opacity: 1;\n    visibility: visible;\n}\n\n.acc-modal {\n    background: #FFFFFF;\n    border-radius: 20px;\n    max-width: 400px;\n    width: 100%;\n    max-height: 90vh;\n    overflow-y: auto;\n    padding: 24px 20px 20px;\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n    transform: scale(0.9) translateY(10px);\n    opacity: 0;\n    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;\n}\n\n.acc-modal-overlay.open .acc-modal {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n}\n\n.acc-modal-header {\n    text-align: center;\n    margin-bottom: 20px;\n}\n\n.acc-modal-icon {\n    width: 56px;\n    height: 56px;\n    border-radius: 16px;\n    background: #E8F0FE;\n    color: #1A73E8;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 22px;\n    margin: 0 auto 12px;\n}\n\n.acc-modal-title {\n    font-size: 18px;\n    font-weight: 800;\n    color: #1A1A2E;\n    margin: 0 0 4px;\n}\n\n.acc-modal-subtitle {\n    font-size: 13px;\n    color: #999;\n    font-weight: 400;\n    margin: 0;\n}\n\n.acc-modal-input-wrapper {\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.acc-modal-input-wrapper i {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #1A73E8;\n    font-size: 15px;\n    pointer-events: none;\n}\n\n.acc-modal-input {\n    width: 100%;\n    padding: 14px 44px 14px 16px;\n    border: 2px solid #E8EAED;\n    border-radius: 14px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #1A1A2E;\n    background: #FFFFFF;\n    outline: none;\n    transition: all 0.25s ease;\n    text-align: right;\n    direction: rtl;\n    font-family: inherit;\n}\n\n.acc-modal-input:focus {\n    border-color: #1A73E8;\n    box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.10);\n}\n\n.acc-modal-actions {\n    display: flex;\n    gap: 10px;\n}\n\n.acc-modal-btn {\n    flex: 1;\n    padding: 13px 16px;\n    border-radius: 12px;\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n    border: none;\n    transition: all 0.2s ease;\n    font-family: inherit;\n}\n\n.acc-modal-btn.cancel {\n    background: #F5F7FA;\n    color: #666;\n}\n\n.acc-modal-btn.confirm {\n    background: #1A73E8;\n    color: #FFFFFF;\n    box-shadow: 0 4px 14px rgba(26, 115, 232, 0.30);\n}\n\n.acc-modal-btn.confirm:active {\n    transform: scale(0.97);\n    background: #1557B0;\n}\n\n/* ============================================ */\n/* ===== TOGGLE SWITCH ===== */\n/* ============================================ */\n.acc-toggle {\n    position: relative;\n    display: inline-block;\n    width: 48px;\n    height: 26px;\n    flex-shrink: 0;\n    cursor: pointer;\n}\n\n.acc-toggle input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    position: absolute;\n}\n\n.acc-toggle-track {\n    position: absolute;\n    inset: 0;\n    background: #D1D5DB;\n    border-radius: 50px;\n    transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.acc-toggle-thumb {\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 22px;\n    height: 22px;\n    background: #FFFFFF;\n    border-radius: 50%;\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n    z-index: 2;\n}\n\n.acc-toggle input:checked ~ .acc-toggle-track {\n    background: #1A73E8;\n}\n\n.acc-toggle input:checked ~ .acc-toggle-thumb {\n    transform: translateX(22px);\n    box-shadow: 0 2px 6px rgba(26, 115, 232, 0.35);\n}\n\n/* ============================================ */\n/* ===== LANGUAGE MODAL ===== */\n/* ============================================ */\n.acc-lang-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 4px;\n}\n\n.acc-lang-option {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    padding: 14px 16px;\n    background: #FFFFFF;\n    border: 2px solid #E8EAED;\n    border-radius: 14px;\n    cursor: pointer;\n    transition: all 0.25s ease;\n    text-align: right;\n    width: 100%;\n    font-family: inherit;\n}\n\n.acc-lang-option:active {\n    transform: scale(0.98);\n}\n\n.acc-lang-option.selected {\n    border-color: #1A73E8;\n    background: #F5F9FF;\n    box-shadow: 0 4px 14px rgba(26, 115, 232, 0.10);\n}\n\n.acc-lang-flag {\n    width: 44px;\n    height: 44px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    background: #F5F7FA;\n    flex-shrink: 0;\n    border: 2px solid #F0F2F5;\n}\n\n.acc-lang-option.selected .acc-lang-flag {\n    border-color: #1A73E8;\n}\n\n.acc-lang-info {\n    flex: 1;\n    min-width: 0;\n}\n\n.acc-lang-info h5 {\n    font-size: 15px;\n    font-weight: 700;\n    color: #1A1A2E;\n    margin: 0 0 3px;\n}\n\n.acc-lang-info p {\n    font-size: 12px;\n    color: #888;\n    margin: 0;\n    font-weight: 400;\n    direction: ltr;\n    text-align: right;\n}\n\n.acc-lang-check {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    border: 2px solid #D1D5DB;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    color: transparent;\n    transition: all 0.25s ease;\n    flex-shrink: 0;\n}\n\n.acc-lang-option.selected .acc-lang-check {\n    background: #1A73E8;\n    border-color: #1A73E8;\n    color: #FFFFFF;\n}\n\n.acc-lang-note {\n    background: #F5F9FF;\n    border: 1px solid #D6E8F8;\n    border-radius: 12px;\n    padding: 12px 14px;\n    font-size: 12px;\n    color: #1A73E8;\n    line-height: 1.6;\n    display: flex;\n    gap: 10px;\n    text-align: right;\n    font-weight: 500;\n    margin-top: 8px;\n}\n\n/* ============================================ */\n/* ===== ABOUT MODAL ===== */\n/* ============================================ */\n.acc-about-hero {\n    text-align: center;\n    padding: 8px 0 20px;\n}\n\n.acc-about-logo {\n    font-size: 32px;\n    font-weight: 900;\n    letter-spacing: 1.5px;\n    color: #1A73E8;\n    margin-bottom: 6px;\n}\n\n.acc-about-logo span {\n    color: #00BCD4;\n}\n\n.acc-about-tagline {\n    font-size: 13px;\n    color: #888;\n    font-weight: 500;\n    margin-top: 2px;\n}\n\n.acc-about-divider {\n    height: 2px;\n    background: linear-gradient(90deg, transparent, #1A73E8, transparent);\n    margin: 16px 0;\n    border-radius: 2px;\n    opacity: 0.6;\n}\n\n.acc-about-pattern {\n    text-align: center;\n    color: #B5D4F0;\n    font-size: 10px;\n    letter-spacing: 2px;\n    margin: 12px 0;\n    overflow: hidden;\n    white-space: nowrap;\n    user-select: none;\n}\n\n.acc-about-content {\n    background: linear-gradient(145deg, #F5F9FF, #FFFFFF);\n    border: 1px solid #E8F0FE;\n    border-radius: 16px;\n    padding: 18px 16px;\n    margin-bottom: 12px;\n    position: relative;\n    overflow: hidden;\n}\n\n.acc-about-text {\n    font-size: 13.5px;\n    color: #1A1A2E;\n    line-height: 2;\n    text-align: center;\n    font-weight: 500;\n}\n\n.acc-about-text p {\n    margin: 0 0 8px;\n}\n\n.acc-about-text p:last-child {\n    margin-bottom: 0;\n}\n\n.acc-about-text .highlight {\n    color: #1A73E8;\n    font-weight: 800;\n}\n\n.acc-about-text .cyan {\n    color: #00BCD4;\n    font-weight: 800;\n}\n\n.acc-about-features {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 16px 0;\n}\n\n.acc-about-feature {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 14px;\n    background: #FFFFFF;\n    border: 1px solid #E8F0FE;\n    border-radius: 12px;\n}\n\n.acc-about-feature-icon {\n    width: 38px;\n    height: 38px;\n    border-radius: 11px;\n    background: #E8F0FE;\n    color: #1A73E8;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 15px;\n    flex-shrink: 0;\n}\n\n.acc-about-feature-icon.cyan {\n    background: rgba(0, 188, 212, 0.12);\n    color: #00BCD4;\n}\n\n.acc-about-feature-icon.green {\n    background: rgba(16, 185, 129, 0.12);\n    color: #10B981;\n}\n\n.acc-about-feature-icon.orange {\n    background: rgba(245, 158, 11, 0.12);\n    color: #F59E0B;\n}\n\n.acc-about-feature-info h5 {\n    font-size: 13px;\n    font-weight: 700;\n    color: #1A1A2E;\n    margin: 0 0 2px;\n}\n\n.acc-about-feature-info p {\n    font-size: 11.5px;\n    color: #888;\n    margin: 0;\n    font-weight: 400;\n}\n\n.acc-about-slogan {\n    background: linear-gradient(145deg, #1A73E8, #0D47A1);\n    border-radius: 14px;\n    padding: 16px 18px;\n    margin: 16px 0 12px;\n    color: #FFFFFF;\n    text-align: center;\n    box-shadow: 0 6px 20px rgba(26, 115, 232, 0.25);\n}\n\n.acc-about-slogan-text {\n    font-size: 15px;\n    font-weight: 800;\n    line-height: 1.7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n\n.acc-about-slogan-text .brand {\n    color: #6EF3E8;\n    font-weight: 900;\n}\n\n.acc-about-slogan-heart {\n    color: #FF6B9D;\n    font-size: 16px;\n    animation: heartBeat 1.5s infinite;\n    display: inline-block;\n}\n\n@keyframes heartBeat {\n    0%, 100% { transform: scale(1); }\n    50% { transform: scale(1.15); }\n}\n\n.acc-about-footer {\n    text-align: center;\n    padding: 16px 0 8px;\n    font-size: 11.5px;\n    color: #B0B8C4;\n    line-height: 1.8;\n}\n\n.acc-about-footer .blue-heart {\n    color: #1A73E8;\n    font-size: 14px;\n    margin: 0 4px;\n    display: inline-block;\n    animation: heartBeat 1.8s infinite;\n}\n\n.acc-about-version {\n    display: inline-block;\n    background: #F5F7FA;\n    color: #888;\n    padding: 4px 12px;\n    border-radius: 50px;\n    font-size: 10.5px;\n    font-weight: 700;\n    margin-top: 8px;\n    border: 1px solid #E8EAED;\n}\n\n.acc-about-close-btn {\n    width: 100%;\n    padding: 14px 20px;\n    background: #1A73E8;\n    color: #FFFFFF;\n    border: none;\n    border-radius: 14px;\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n    font-family: inherit;\n    transition: all 0.25s ease;\n    margin-top: 6px;\n    box-shadow: 0 6px 20px rgba(26, 115, 232, 0.25);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n}\n\n.acc-about-close-btn:active {\n    transform: scale(0.97);\n    background: #1557B0;\n}\n\n/* ============================================ */\n/* ===== ORDERS PAGE ===== */\n/* ============================================ */\n.acc-orders-page,\n.acc-order-detail-page {\n    position: fixed;\n    inset: 0;\n    background: #F5F7FA;\n    z-index: 9998;\n    display: flex;\n    flex-direction: column;\n    transform: translateX(100%);\n    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    max-width: 480px;\n    margin: 0 auto;\n    box-shadow: 0 0 40px rgba(0,0,0,0.1);\n}\n\n.acc-orders-page.active,\n.acc-order-detail-page.active {\n    transform: translateX(0);\n}\n\n.acc-order-detail-page { z-index: 9999; }\n\n.acc-orders-header {\n    background: #FFFFFF;\n    padding: 14px 16px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    border-bottom: 1px solid #F0F2F5;\n}\n\n.acc-orders-back {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n    border: none;\n    background: #F0F2F5;\n    color: #1A1A2E;\n    font-size: 16px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.acc-orders-title {\n    font-size: 18px;\n    font-weight: 800;\n    color: #1A1A2E;\n    margin: 0;\n}\n\n.acc-orders-count {\n    font-size: 12px;\n    color: #888;\n    margin-top: 2px;\n}\n\n.acc-orders-search { padding: 12px 16px 4px; }\n\n.acc-orders-search-wrapper { position: relative; }\n\n.acc-orders-search-wrapper i {\n    position: absolute;\n    right: 14px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #B0B8C4;\n    font-size: 14px;\n    pointer-events: none;\n}\n\n.acc-orders-search-input {\n    width: 100%;\n    padding: 12px 42px 12px 16px;\n    border: 2px solid #E8EAED;\n    border-radius: 12px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #1A1A2E;\n    outline: none;\n    font-family: inherit;\n    text-align: right;\n    direction: rtl;\n}\n\n.acc-orders-search-input:focus {\n    border-color: #1A73E8;\n    box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.08);\n}\n\n.acc-orders-filters {\n    display: flex;\n    gap: 8px;\n    padding: 12px 16px;\n    overflow-x: auto;\n    scrollbar-width: none;\n}\n\n.acc-orders-filters::-webkit-scrollbar { display: none; }\n\n.acc-orders-filter {\n    padding: 8px 14px;\n    border-radius: 50px;\n    border: 1px solid #E8EAED;\n    background: #FFFFFF;\n    color: #555;\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n    white-space: nowrap;\n    flex-shrink: 0;\n    font-family: inherit;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.acc-orders-filter.active {\n    background: #1A73E8;\n    color: #FFFFFF;\n    border-color: #1A73E8;\n}\n\n.acc-orders-filter .badge {\n    background: rgba(255,255,255,0.25);\n    color: #FFFFFF;\n    padding: 1px 7px;\n    border-radius: 50px;\n    font-size: 10px;\n    font-weight: 700;\n}\n\n.acc-orders-filter:not(.active) .badge {\n    background: #E8F0FE;\n    color: #1A73E8;\n}\n\n.acc-orders-list {\n    flex: 1;\n    overflow-y: auto;\n    padding: 4px 16px 24px;\n}\n\n.acc-order-card {\n    background: #FFFFFF;\n    border-radius: 16px;\n    padding: 14px;\n    margin-bottom: 12px;\n    box-shadow: 0 2px 12px rgba(0,0,0,0.04);\n    border: 1px solid #F0F2F5;\n    cursor: pointer;\n}\n\n.acc-order-top {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 12px;\n    padding-bottom: 10px;\n    border-bottom: 1px dashed #F0F2F5;\n    gap: 8px;\n}\n\n.acc-order-id {\n    font-size: 12px;\n    font-weight: 800;\n    color: #1A1A2E;\n    direction: ltr;\n    font-family: 'SF Mono', 'Courier New', monospace;\n}\n\n.acc-order-status {\n    font-size: 10px;\n    font-weight: 700;\n    padding: 4px 10px;\n    border-radius: 50px;\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    white-space: nowrap;\n}\n\n.acc-order-status.pending { background: rgba(245,158,11,0.12); color: #F59E0B; }\n.acc-order-status.processing { background: rgba(26,115,232,0.12); color: #1A73E8; }\n.acc-order-status.completed { background: rgba(16,185,129,0.12); color: #10B981; }\n.acc-order-status.cancelled { background: rgba(239,68,68,0.10); color: #EF4444; }\n\n.acc-order-body {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-bottom: 12px;\n}\n\n.acc-order-thumb {\n    width: 54px;\n    height: 54px;\n    border-radius: 12px;\n    background: #F5F7FA;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    padding: 5px;\n}\n\n.acc-order-thumb img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.acc-order-info { flex: 1; min-width: 0; }\n\n.acc-order-name {\n    font-size: 13px;\n    font-weight: 700;\n    color: #1A1A2E;\n    margin: 0 0 3px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.acc-order-desc {\n    font-size: 11px;\n    color: #888;\n    margin: 0 0 4px;\n}\n\n.acc-order-date {\n    font-size: 10px;\n    color: #B0B8C4;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.acc-order-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 10px;\n    border-top: 1px dashed #F0F2F5;\n    gap: 8px;\n}\n\n.acc-order-total-label {\n    font-size: 10px;\n    color: #999;\n    display: block;\n    margin-bottom: 2px;\n}\n\n.acc-order-total {\n    font-size: 16px;\n    font-weight: 800;\n    color: #1A73E8;\n    direction: ltr;\n}\n\n.acc-order-actions { display: flex; gap: 6px; }\n\n.acc-order-btn {\n    width: 34px;\n    height: 34px;\n    border-radius: 10px;\n    border: 1px solid #E8EAED;\n    background: #FFFFFF;\n    color: #666;\n    font-size: 13px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.acc-order-btn.primary {\n    background: #1A73E8;\n    color: #FFFFFF;\n    border-color: #1A73E8;\n}\n\n.acc-orders-empty {\n    text-align: center;\n    padding: 60px 20px;\n    display: none;\n}\n\n.acc-orders-empty.show { display: block; }\n\n.acc-orders-empty-icon {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    background: #F0F2F5;\n    color: #B0B8C4;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 36px;\n    margin: 0 auto 16px;\n}\n\n.acc-orders-empty h3 {\n    font-size: 17px;\n    font-weight: 700;\n    color: #1A1A2E;\n    margin: 0 0 6px;\n}\n\n.acc-orders-empty p {\n    font-size: 13px;\n    color: #999;\n    margin: 0 0 16px;\n}\n\n/* ============================================ */\n/* ===== TOAST ===== */\n/* ============================================ */\n#accToast {\n    position: fixed;\n    top: 24px;\n    left: 50%;\n    transform: translateX(-50%) translateY(-100px);\n    background: #1A1A2E;\n    color: #FFFFFF;\n    padding: 14px 22px;\n    border-radius: 14px;\n    font-size: 14px;\n    font-weight: 600;\n    box-shadow: 0 10px 40px rgba(0,0,0,0.25);\n    z-index: 99999;\n    opacity: 0;\n    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n    max-width: 90%;\n    text-align: center;\n    pointer-events: none;\n}\n\n/* ============================================ */\n/* ===== RESPONSIVE ===== */\n/* ============================================ */\n@media (max-width: 420px) {\n    .account-hero { padding: 24px 18px 52px; }\n    .account-avatar { width: 88px; height: 88px; font-size: 36px; }\n    .account-name { font-size: 19px; }\n    .account-stat-card { padding: 13px 6px; }\n    .account-stat-icon { width: 36px; height: 36px; font-size: 15px; }\n    .account-stat-value { font-size: 16px; }\n    .account-item { padding: 12px 14px; }\n    .account-item-info h4 { font-size: 13px; }\n    .account-section-title { padding: 14px 14px 8px; font-size: 13px; }\n    .acc-about-logo { font-size: 26px; }\n    .acc-about-text { font-size: 12.5px; }\n}";
    const ACCOUNT_HTML = '<div class="page active" id="page-account">\n<!-- Hero -->\n<div class="account-hero">\n<div class="account-avatar-wrapper">\n<div class="account-avatar" id="accountAvatar">\n<i class="fas fa-user"></i>\n</div>\n<button aria-label="تغيير الصورة" class="account-avatar-edit" id="avatarEditBtn">\n<i class="fas fa-camera"></i>\n</button>\n</div>\n<h2 class="account-name" id="accountName">مستخدم REDEEM</h2>\n<p class="account-phone">\n<bdi id="accountPhone">+249901839168</bdi>\n</p>\n<span class="account-verified-badge">\n<i class="fas fa-check-circle"></i>\n<span data-i18n="account.verified">حساب موثّق</span>\n</span>\n</div>\n<!-- Stats -->\n<div class="account-stats">\n<div class="account-stat-card">\n<div class="account-stat-icon">\n<i class="fas fa-shopping-bag"></i>\n</div>\n<div class="account-stat-value" id="statOrders">12</div>\n<div class="account-stat-label" data-i18n="account.orders_count">الطلبات</div>\n</div>\n<div class="account-stat-card">\n<div class="account-stat-icon">\n<i class="fas fa-star"></i>\n</div>\n<div class="account-stat-value" id="statPoints">250</div>\n<div class="account-stat-label" data-i18n="account.points">النقاط</div>\n</div>\n</div>\n<!-- Body -->\n<div class="account-body">\n<!-- معلومات الحساب -->\n<div class="account-section">\n<div class="account-section-title">\n<i class="fas fa-user-circle"></i>\n<span data-i18n="account.info_section">معلومات الحساب</span>\n</div>\n<div class="account-item" data-action="edit-name">\n<div class="account-item-left">\n<div class="account-item-icon">\n<i class="fas fa-user"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.full_name">الاسم الكامل</h4>\n<p id="infoName">مستخدم REDEEM</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n<div class="account-item" data-action="edit-email">\n<div class="account-item-left">\n<div class="account-item-icon cyan">\n<i class="fas fa-envelope"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.email">البريد الإلكتروني</h4>\n<p id="infoEmail">user@redeemstore.com</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n<div class="account-item" data-action="edit-phone">\n<div class="account-item-left">\n<div class="account-item-icon green">\n<i class="fab fa-whatsapp"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.whatsapp">رقم واتساب</h4>\n<p><bdi id="infoPhone">+249901839168</bdi></p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n</div>\n<!-- الأمان -->\n<div class="account-section">\n<div class="account-section-title">\n<i class="fas fa-shield-alt"></i>\n<span data-i18n="account.security_section">الأمان والخصوصية</span>\n</div>\n<div class="account-item" data-action="change-password">\n<div class="account-item-left">\n<div class="account-item-icon orange">\n<i class="fas fa-lock"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.change_password">تغيير كلمة المرور</h4>\n<p data-i18n="account.change_password_desc">آخر تحديث قبل 30 يوم</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n<div class="account-item" data-action="two-factor" style="cursor:default;">\n<div class="account-item-left">\n<div class="account-item-icon purple">\n<i class="fas fa-fingerprint"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.two_factor">التحقق بخطوتين</h4>\n<p data-i18n="account.two_factor_desc">حماية إضافية لحسابك</p>\n</div>\n</div>\n<div class="account-item-right">\n<label class="acc-toggle">\n<input data-key="two-factor" id="toggleTwoFactor" type="checkbox"/>\n<span class="acc-toggle-track"></span>\n<span class="acc-toggle-thumb"></span>\n</label>\n</div>\n</div>\n</div>\n<!-- الطلبات والإعدادات -->\n<div class="account-section">\n<div class="account-section-title">\n<i class="fas fa-cog"></i>\n<span data-i18n="account.settings_section">الطلبات والإعدادات</span>\n</div>\n<div class="account-item" data-action="my-orders">\n<div class="account-item-left">\n<div class="account-item-icon">\n<i class="fas fa-receipt"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.my_orders">طلباتي</h4>\n<p data-i18n="account.my_orders_desc">عرض جميع طلباتك السابقة</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n<div class="account-item" style="cursor:default;">\n<div class="account-item-left">\n<div class="account-item-icon orange">\n<i class="fas fa-bell"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.notifications">الإشعارات</h4>\n<p data-i18n="account.notifications_desc">إدارة تنبيهاتك</p>\n</div>\n</div>\n<div class="account-item-right">\n<label class="acc-toggle">\n<input checked="" data-key="notifications" type="checkbox"/>\n<span class="acc-toggle-track"></span>\n<span class="acc-toggle-thumb"></span>\n</label>\n</div>\n</div>\n<div class="account-item" data-action="language">\n<div class="account-item-left">\n<div class="account-item-icon cyan">\n<i class="fas fa-globe"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.language">اللغة</h4>\n<p id="currentLanguageLabel">العربية</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n<div class="account-item" data-action="about">\n<div class="account-item-left">\n<div class="account-item-icon">\n<i class="fas fa-info-circle"></i>\n</div>\n<div class="account-item-info">\n<h4 data-i18n="account.about">عن التطبيق</h4>\n<p data-i18n="account.about_desc">REDEEM STORE v1.0.0</p>\n</div>\n</div>\n<div class="account-item-right">\n<i class="fas fa-chevron-left"></i>\n</div>\n</div>\n</div>\n<!-- Logout -->\n<button class="account-logout" id="accountLogoutBtn">\n<i class="fas fa-sign-out-alt"></i>\n<span data-i18n="account.logout">تسجيل الخروج</span>\n</button>\n<div class="account-footer-note">\n<i class="fas fa-heart"></i>\n<span data-i18n="account.footer">REDEEM STORE © 2026</span>\n</div>\n</div>\n</div>\n<div class="acc-modal-overlay" id="accInputModal">\n<div class="acc-modal">\n<div class="acc-modal-header">\n<div class="acc-modal-icon" id="accModalIcon"><i class="fas fa-user"></i></div>\n<h3 class="acc-modal-title" id="accModalTitle">تعديل</h3>\n<p class="acc-modal-subtitle" id="accModalSubtitle">أدخل القيمة الجديدة</p>\n</div>\n<div class="acc-modal-input-wrapper">\n<i class="fas fa-pen" id="accModalInputIcon"></i>\n<input class="acc-modal-input" id="accModalInput" type="text"/>\n</div>\n<div class="acc-modal-actions">\n<button class="acc-modal-btn cancel" data-i18n="modal.cancel" id="accModalCancel">إلغاء</button>\n<button class="acc-modal-btn confirm" data-i18n="modal.save" id="accModalConfirm">حسناً</button>\n</div>\n</div>\n</div>\n<div class="acc-modal-overlay" id="accPasswordModal">\n<div class="acc-modal">\n<div class="acc-modal-header">\n<div class="acc-modal-icon" style="background: rgba(245,158,11,0.12); color:#F59E0B;">\n<i class="fas fa-lock"></i>\n</div>\n<h3 class="acc-modal-title" data-i18n="pass.title">تغيير كلمة المرور</h3>\n<p class="acc-modal-subtitle" data-i18n="pass.subtitle">أدخل بياناتك</p>\n</div>\n<div class="acc-modal-input-wrapper">\n<i class="fas fa-lock"></i>\n<input class="acc-modal-input" id="oldPassword" placeholder="كلمة المرور الحالية" type="password"/>\n</div>\n<div class="acc-modal-input-wrapper">\n<i class="fas fa-key"></i>\n<input class="acc-modal-input" id="newPassword" placeholder="كلمة المرور الجديدة" type="password"/>\n</div>\n<div class="acc-modal-input-wrapper">\n<i class="fas fa-check-circle"></i>\n<input class="acc-modal-input" id="confirmPassword" placeholder="تأكيد كلمة المرور" type="password"/>\n</div>\n<div class="acc-modal-actions">\n<button class="acc-modal-btn cancel" data-i18n="modal.cancel" id="passCancelBtn">إلغاء</button>\n<button class="acc-modal-btn confirm" data-i18n="modal.update" id="passSaveBtn">تحديث</button>\n</div>\n</div>\n</div>\n<div class="acc-modal-overlay" id="acc2faModal">\n<div class="acc-modal">\n<div class="acc-modal-header">\n<div class="acc-modal-icon" style="background: rgba(139,92,246,0.12); color:#8B5CF6;">\n<i class="fas fa-fingerprint"></i>\n</div>\n<h3 class="acc-modal-title" id="acc2faTitle">تفعيل التحقق بخطوتين</h3>\n<p class="acc-modal-subtitle" id="acc2faSubtitle">اختر طريقة استقبال الرمز</p>\n</div>\n<div id="acc2faStep1">\n<button class="acc-lang-option selected" data-method="sms" style="margin-bottom:10px;">\n<div class="acc-lang-flag"><i class="fas fa-sms"></i></div>\n<div class="acc-lang-info">\n<h5>رسالة نصية SMS</h5>\n<p>استقبل الرمز عبر رسالة</p>\n</div>\n<div class="acc-lang-check"><i class="fas fa-check"></i></div>\n</button>\n<button class="acc-lang-option" data-method="app" style="margin-bottom:10px;">\n<div class="acc-lang-flag"><i class="fas fa-mobile-alt"></i></div>\n<div class="acc-lang-info">\n<h5>تطبيق المصادقة</h5>\n<p>Google Authenticator</p>\n</div>\n<div class="acc-lang-check"><i class="fas fa-check"></i></div>\n</button>\n</div>\n<div id="acc2faStep2" style="display:none;">\n<div class="acc-modal-input-wrapper">\n<i class="fas fa-key"></i>\n<input class="acc-modal-input" id="otpCode" maxlength="6" placeholder="أدخل الرمز المكوّن من 6 أرقام" style="direction:ltr; text-align:center; letter-spacing:8px; font-size:20px;" type="text"/>\n</div>\n</div>\n<div id="acc2faStep3" style="display:none; text-align:center;">\n<div style="width:80px; height:80px; border-radius:50%; background:rgba(16,185,129,0.12); color:#10B981; display:flex; align-items:center; justify-content:center; font-size:38px; margin:0 auto 16px;">\n<i class="fas fa-check"></i>\n</div>\n<h4 style="font-size:18px; font-weight:800; color:#1A1A2E; margin:0 0 6px;">تم التفعيل بنجاح!</h4>\n<p style="font-size:13px; color:#888; margin:0 0 20px;">احفظ الرموز الاحتياطية</p>\n<div style="background:#F5F9FF; border:2px dashed #B5D4F0; border-radius:14px; padding:16px; margin-bottom:12px;">\n<div style="font-size:13px; font-weight:700; margin-bottom:10px;">الرموز الاحتياطية</div>\n<div id="backupCodesList" style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px; direction:ltr; font-family:monospace; font-size:12px;"></div>\n</div>\n</div>\n<div class="acc-modal-actions" style="margin-top:16px;">\n<button class="acc-modal-btn cancel" data-i18n="modal.cancel" id="acc2faCancelBtn">إلغاء</button>\n<button class="acc-modal-btn confirm" id="acc2faNextBtn">\n<span class="btn-text" data-i18n="modal.continue">متابعة</span>\n</button>\n</div>\n</div>\n</div>\n<div class="acc-modal-overlay" id="accLangModal">\n<div class="acc-modal">\n<div class="acc-modal-header">\n<div class="acc-modal-icon" style="background: rgba(0,188,212,0.12); color:#00BCD4;">\n<i class="fas fa-globe"></i>\n</div>\n<h3 class="acc-modal-title" data-i18n="lang.title">اختيار اللغة</h3>\n<p class="acc-modal-subtitle" data-i18n="lang.subtitle">اختر اللغة المفضلة</p>\n</div>\n<div class="acc-lang-list" id="accLangList">\n<button class="acc-lang-option" data-lang="ar" type="button">\n<div class="acc-lang-flag">🇸🇦</div>\n<div class="acc-lang-info">\n<h5 data-i18n="lang.arabic">العربية</h5>\n<p data-i18n="lang.arabic_en">Arabic</p>\n</div>\n<div class="acc-lang-check"><i class="fas fa-check"></i></div>\n</button>\n<button class="acc-lang-option" data-lang="en" type="button">\n<div class="acc-lang-flag">🇬🇧</div>\n<div class="acc-lang-info">\n<h5 data-i18n="lang.english">English</h5>\n<p data-i18n="lang.english_ar">الإنجليزية</p>\n</div>\n<div class="acc-lang-check"><i class="fas fa-check"></i></div>\n</button>\n</div>\n<div class="acc-lang-note">\n<i class="fas fa-info-circle"></i>\n<div data-i18n="lang.note">سيتم تحديث التطبيق مباشرة</div>\n</div>\n</div>\n</div>\n<div class="acc-modal-overlay" id="accAboutModal">\n<div class="acc-modal">\n<div class="acc-about-hero">\n<div class="acc-about-logo">RE<span>DEM</span> STORE</div>\n<div class="acc-about-tagline" data-i18n="about.tagline">متجرك الرقمي الموثوق 🩵</div>\n</div>\n<div class="acc-about-divider"></div>\n<div class="acc-about-content">\n<div class="acc-about-text">\n<p data-i18n="about.intro">متجر متخصص في شحن الألعاب والبطاقات الإلكترونية!</p>\n</div>\n</div>\n<div class="acc-about-pattern">▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬</div>\n<div class="acc-about-features">\n<div class="acc-about-feature">\n<div class="acc-about-feature-icon"><i class="fas fa-gamepad"></i></div>\n<div class="acc-about-feature-info">\n<h5 data-i18n="about.feature1_title">بطاقات الألعاب</h5>\n<p data-i18n="about.feature1_desc">شحن فوري لجميع الألعاب</p>\n</div>\n</div>\n<div class="acc-about-feature">\n<div class="acc-about-feature-icon cyan"><i class="fas fa-store"></i></div>\n<div class="acc-about-feature-info">\n<h5 data-i18n="about.feature2_title">بطاقات المتاجر</h5>\n<p data-i18n="about.feature2_desc">Amazon, Noon, SHEIN</p>\n</div>\n</div>\n<div class="acc-about-feature">\n<div class="acc-about-feature-icon green"><i class="fas fa-credit-card"></i></div>\n<div class="acc-about-feature-info">\n<h5 data-i18n="about.feature3_title">البطاقات الإلكترونية</h5>\n<p data-i18n="about.feature3_desc">Google Play, iTunes, PSN</p>\n</div>\n</div>\n<div class="acc-about-feature">\n<div class="acc-about-feature-icon orange"><i class="fas fa-crown"></i></div>\n<div class="acc-about-feature-info">\n<h5 data-i18n="about.feature4_title">الاشتراكات الرقمية</h5>\n<p data-i18n="about.feature4_desc">Canva, Netflix, Starlink</p>\n</div>\n</div>\n</div>\n<div class="acc-about-pattern">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</div>\n<div class="acc-about-content">\n<div class="acc-about-text">\n<p data-i18n="about.extra1">كما تتوفر لدينا خدمة الاشتراكات الرقمية مثل Canva، Netflix، Starlink وغيرها.</p>\n<p data-i18n="about.extra2">كل بطاقات المتاجر، بطاقات الألعاب، والبطاقات الإلكترونية في مكان واحد 😊</p>\n<p data-i18n="about.extra3"><span class="cyan">"وغيرها من البطاقات النادرة فقط اطلب 😉!"</span></p>\n</div>\n</div>\n<div class="acc-about-slogan">\n<div class="acc-about-slogan-text">\n<i class="fas fa-bolt" style="color:#FCD34D;"></i>\n<span data-i18n="about.slogan_1">مع</span>\n<span class="brand">Redeem</span>\n<span data-i18n="about.slogan_2">اشحن وإنت مطمن</span>\n<i class="fas fa-heart acc-about-slogan-heart"></i>\n</div>\n</div>\n<div class="acc-about-footer">\n<i class="fas fa-heart blue-heart"></i>\n<span data-i18n="about.made_with">صنع بحب من فريق</span>\n<strong style="color:#1A73E8;"> REDEEM STORE</strong>\n<i class="fas fa-heart blue-heart"></i>\n<br/>\n<span class="acc-about-version">v1.0.0</span>\n</div>\n<button class="acc-about-close-btn" id="accAboutCloseBtn">\n<i class="fas fa-check-circle"></i>\n<span data-i18n="about.close">تم، شكراً</span>\n</button>\n</div>\n</div>\n<div class="acc-modal-overlay" id="accConfirmModal">\n<div class="acc-modal">\n<div class="acc-modal-header">\n<div class="acc-modal-icon" id="confirmIcon" style="background: rgba(239,68,68,0.10); color:#EF4444;">\n<i class="fas fa-exclamation-triangle"></i>\n</div>\n<h3 class="acc-modal-title" data-i18n="confirm.are_you_sure" id="confirmTitle">هل أنت متأكد؟</h3>\n<p class="acc-modal-subtitle" data-i18n="confirm.cannot_undo" id="confirmSubtitle">لا يمكن التراجع</p>\n</div>\n<div class="acc-modal-actions">\n<button class="acc-modal-btn cancel" data-i18n="modal.cancel" id="confirmCancelBtn">إلغاء</button>\n<button class="acc-modal-btn confirm" data-i18n="modal.confirm" id="confirmOkBtn" style="background:#EF4444;">تأكيد</button>\n</div>\n</div>\n</div>';

    function mountAccountPage() {
        if (document.getElementById('page-account')) return;

        const host = document.querySelector('.page-container') || document.body;

        if (!document.getElementById('redeem-account-component-style')) {
            const style = document.createElement('style');
            style.id = 'redeem-account-component-style';
            style.textContent = ACCOUNT_CSS;
            document.head.appendChild(style);
        }

        const wrapper = document.createElement('div');
        wrapper.innerHTML = ACCOUNT_HTML;

        const page = wrapper.querySelector('#page-account');
        const modals = wrapper.querySelectorAll('.acc-modal-overlay');

        const nav = host.querySelector('#bottomNav');
        if (page) {
            // Keep the account page hidden until the existing main-store switchPage()
            // opens it. This makes the page ready before the user taps "الحساب".
            page.classList.remove('active');
            page.style.display = 'none';
            page.style.padding = '0 0 30px 0';
            page.style.background = '#F5F7FA';

            if (nav) host.insertBefore(page, nav);
            else host.appendChild(page);
        }

        // Modals are placed on body so the main page-container's overflow does not clip them.
        modals.forEach(modal => document.body.appendChild(modal));

        // i18n may have initialized before this component was mounted.
        if (window.i18n && typeof window.i18n.translatePage === 'function') {
            window.i18n.translatePage();
        }
    }

    // Mount immediately while the main store is still loading, not after a user click.
    mountAccountPage();
})();

// ===== ORIGINAL ACCOUNT LOGIC =====
// ============================================
// ===== REDEEM STORE - MAIN SCRIPT =====
// ============================================
(function () {
    'use strict';

    // ============================================
    // ===== TOAST =====
    // ============================================
    window.showToast = function(message, type = 'success') {
        let toast = document.getElementById('accToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'accToast';
            document.body.appendChild(toast);
        }

        // ترجمة الرسالة لو مفتاح
        const translated = (message.startsWith('toast.') || message.startsWith('otp.'))
            ? i18n.t(message)
            : message;

        toast.style.background = type === 'error' ? '#EF4444' : '#10B981';
        toast.textContent = translated;

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        clearTimeout(window.__accToastTimer);
        window.__accToastTimer = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(-100px)';
        }, 2500);
    };

    // ============================================
    // ===== ACCOUNT DATA =====
    // ============================================
    const accountData = {
        name: 'مستخدم REDEEM',
        email: 'user@redeemstore.com',
        phone: '+249901839168',
        orders: 12,
        points: 250,
        twoFactor: false
    };

    // ============================================
    // ===== RENDER ACCOUNT =====
    // ============================================
    function renderAccountStats() {
        const statOrders = document.getElementById('statOrders');
        const statPoints = document.getElementById('statPoints');
        if (statOrders) statOrders.textContent = accountData.orders;
        if (statPoints) statPoints.textContent = accountData.points;
    }

    function renderAccountInfo() {
        const ids = {
            infoName: accountData.name,
            infoEmail: accountData.email,
            infoPhone: accountData.phone,
            accountName: accountData.name,
            accountPhone: accountData.phone
        };
        Object.keys(ids).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = ids[id];
        });
    }

    // ============================================
    // ===== INPUT MODAL =====
    // ============================================
    const accModal = {
        overlay: null,
        currentField: null,
        currentType: 'text',

        init() {
            this.overlay = document.getElementById('accInputModal');
            if (!this.overlay) return;

            document.getElementById('accModalCancel').addEventListener('click', () => this.close());
            document.getElementById('accModalConfirm').addEventListener('click', () => this.save());

            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });

            document.getElementById('accModalInput').addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.save();
                if (e.key === 'Escape') this.close();
            });
        },

        open(config) {
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
                input.style.direction = 'ltr';
                input.style.textAlign = 'left';
            } else {
                input.style.direction = 'rtl';
                input.style.textAlign = 'right';
            }

            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            setTimeout(() => { input.focus(); if (input.value) input.select(); }, 250);
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        },

        save() {
            const input = document.getElementById('accModalInput');
            const value = input.value.trim();

            if (!value) {
                input.style.borderColor = '#EF4444';
                setTimeout(() => { input.style.borderColor = ''; }, 800);
                return;
            }

            if (this.currentType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showToast('toast.enter_valid_email', 'error');
                input.style.borderColor = '#EF4444';
                setTimeout(() => { input.style.borderColor = ''; }, 800);
                return;
            }

            const field = this.currentField;
            if (field === 'name') {
                accountData.name = value;
                showToast('✅ ' + i18n.t('toast.name_updated'));
            }
            if (field === 'email') {
                accountData.email = value;
                showToast('✅ ' + i18n.t('toast.email_updated'));
            }
            if (field === 'phone') {
                accountData.phone = value;
                showToast('✅ ' + i18n.t('toast.phone_updated'));
            }

            renderAccountInfo();
            this.close();
        }
    };

    // ============================================
    // ===== PASSWORD MODAL =====
    // ============================================
    const passModal = {
        overlay: null,

        init() {
            this.overlay = document.getElementById('accPasswordModal');
            if (!this.overlay) return;

            document.getElementById('passCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('passSaveBtn').addEventListener('click', () => this.save());
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        },

        open() {
            ['oldPassword', 'newPassword', 'confirmPassword'].forEach(id => {
                document.getElementById(id).value = '';
            });
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            setTimeout(() => document.getElementById('oldPassword').focus(), 250);
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        },

        save() {
            const oldPass = document.getElementById('oldPassword').value;
            const newPass = document.getElementById('newPassword').value;
            const confirmPass = document.getElementById('confirmPassword').value;

            if (!oldPass) { showToast('otp.enter_pass', 'error'); return; }
            if (!newPass || newPass.length < 6) { showToast('otp.pass_short', 'error'); return; }
            if (newPass !== confirmPass) { showToast('otp.pass_mismatch', 'error'); return; }

            this.close();
            showToast('✅ ' + i18n.t('otp.success_pass'));
        }
    };

    // ============================================
    // ===== 2FA MODAL =====
    // ============================================
    const twoFAModal = {
        overlay: null,
        step: 1,
        method: 'sms',

        init() {
            this.overlay = document.getElementById('acc2faModal');
            if (!this.overlay) return;

            this.overlay.querySelectorAll('[data-method]').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.overlay.querySelectorAll('[data-method]').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    this.method = btn.dataset.method;
                });
            });

            document.getElementById('acc2faCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('acc2faNextBtn').addEventListener('click', () => this.next());
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        },

        open() {
            this.step = 1;
            document.getElementById('acc2faStep1').style.display = 'block';
            document.getElementById('acc2faStep2').style.display = 'none';
            document.getElementById('acc2faStep3').style.display = 'none';
            document.getElementById('otpCode').value = '';
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        },

        next() {
            if (this.step === 1) {
                this.step = 2;
                document.getElementById('acc2faStep1').style.display = 'none';
                document.getElementById('acc2faStep2').style.display = 'block';
                setTimeout(() => document.getElementById('otpCode').focus(), 200);
            } else if (this.step === 2) {
                const code = document.getElementById('otpCode').value.trim();
                if (code.length !== 6) {
                    showToast('otp.enter_6', 'error');
                    return;
                }
                this.showBackupCodes();
                this.step = 3;
                document.getElementById('acc2faStep2').style.display = 'none';
                document.getElementById('acc2faStep3').style.display = 'block';
                accountData.twoFactor = true;
                document.getElementById('toggleTwoFactor').checked = true;
                showToast('✅ ' + i18n.t('otp.success_2fa_on'));
            } else {
                this.close();
            }
        },

        showBackupCodes() {
            const codes = [];
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            for (let i = 0; i < 8; i++) {
                let code = '';
                for (let j = 0; j < 8; j++) {
                    code += chars[Math.floor(Math.random() * chars.length)];
                    if (j === 3) code += '-';
                }
                codes.push(code);
            }
            const list = document.getElementById('backupCodesList');
            list.innerHTML = codes.map(c => `<div style="background:#FFF;border:1px solid #E8EAED;border-radius:8px;padding:8px;font-weight:700;text-align:center;">${c}</div>`).join('');
        }
    };

    // ============================================
    // ===== LANGUAGE MODAL =====
    // ============================================
    const langModal = {
        overlay: null,
        currentLang: 'ar',

        init() {
            this.overlay = document.getElementById('accLangModal');
            if (!this.overlay) return;

            this.currentLang = localStorage.getItem('redeem_lang') || 'ar';
            this.updateSelection();

            this.overlay.querySelectorAll('.acc-lang-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    const lang = opt.dataset.lang;
                    if (lang === this.currentLang) { this.close(); return; }
                    this.changeLang(lang);
                });
            });

            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        },

        open() {
            this.updateSelection();
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        },

        updateSelection() {
            this.overlay.querySelectorAll('.acc-lang-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.lang === this.currentLang);
            });
        },

        changeLang(lang) {
            this.currentLang = lang;
            this.updateSelection();
            document.dispatchEvent(new CustomEvent('language:change', { detail: { lang } }));
            showToast('✅ ' + (lang === 'ar' ? i18n.t('lang.changed_ar') : i18n.t('lang.changed_en')));
            setTimeout(() => this.close(), 400);
        }
    };

    // ============================================
    // ===== ABOUT MODAL =====
    // ============================================
    const aboutModal = {
        overlay: null,

        init() {
            this.overlay = document.getElementById('accAboutModal');
            if (!this.overlay) return;

            document.getElementById('accAboutCloseBtn').addEventListener('click', () => this.close());
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.overlay.classList.contains('open')) this.close();
            });
        },

        open() {
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    // ============================================
    // ===== CONFIRM MODAL =====
    // ============================================
    const confirmModal = {
        overlay: null,
        onConfirm: null,

        init() {
            this.overlay = document.getElementById('accConfirmModal');
            if (!this.overlay) return;

            document.getElementById('confirmCancelBtn').addEventListener('click', () => this.close());
            document.getElementById('confirmOkBtn').addEventListener('click', () => {
                const cb = this.onConfirm;
                this.close();
                if (cb) cb();
            });

            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        },

        open(config) {
            document.getElementById('confirmTitle').textContent = config.title || i18n.t('confirm.are_you_sure');
            document.getElementById('confirmSubtitle').textContent = config.subtitle || '';
            this.onConfirm = config.onConfirm;
            this.overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.overlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    // ============================================
    // ===== TOGGLE SYSTEM =====
    // ============================================
    const toggleSystem = {
        storageKey: 'redeem_toggles',

        init() {
            this.loadSavedStates();

            document.querySelectorAll('.acc-toggle input[type="checkbox"]').forEach(input => {
                const key = input.dataset.key;
                if (key) {
                    const saved = this.getState(key);
                    if (saved !== null) input.checked = saved;
                }

                input.addEventListener('change', (e) => {
                    const isOn = e.target.checked;
                    const k = e.target.dataset.key;
                    if (k) this.setState(k, isOn);
                    this.handleToggle(k, isOn);
                });
            });
        },

        getAll() {
            try {
                const raw = localStorage.getItem(this.storageKey);
                return raw ? JSON.parse(raw) : {};
            } catch (e) { return {}; }
        },

        setState(key, value) {
            if (!key) return;
            const all = this.getAll();
            all[key] = value;
            try { localStorage.setItem(this.storageKey, JSON.stringify(all)); } catch (e) {}
        },

        getState(key) {
            const all = this.getAll();
            return key in all ? all[key] : null;
        },

        loadSavedStates() {
            const all = this.getAll();
            Object.keys(all).forEach(key => {
                const input = document.querySelector(`.acc-toggle input[data-key="${key}"]`);
                if (input) input.checked = all[key];
            });
        },

        handleToggle(key, value) {
            if (key === 'notifications') {
                showToast(value ? '🔔 ' + i18n.t('toast.notifications_on') : '🔕 ' + i18n.t('toast.notifications_off'));
            }
            if (key === 'two-factor') {
                if (value) {
                    // التفعيل يمر عبر النافذة
                    const toggle = document.getElementById('toggleTwoFactor');
                    toggle.checked = false;
                    setTimeout(() => { twoFAModal.open(); }, 100);
                } else {
                    confirmModal.open({
                        title: i18n.t('account.disabled'),
                        subtitle: 'هل أنت متأكد من تعطيل التحقق بخطوتين؟',
                        onConfirm: () => {
                            accountData.twoFactor = false;
                            document.getElementById('toggleTwoFactor').checked = false;
                            this.setState('two-factor', false);
                            showToast('✅ ' + i18n.t('otp.success_2fa_off'));
                        }
                    });
                }
            }
        }
    };

    // ============================================
    // ===== ACCOUNT ACTIONS =====
    // ============================================
    function handleAccountAction(action) {
        const actions = {
            'edit-name': () => accModal.open({
                title: i18n.t('modal.edit_name'),
                subtitle: i18n.t('modal.edit_name_desc'),
                icon: 'fas fa-user',
                inputIcon: 'fas fa-user',
                value: accountData.name,
                type: 'text',
                field: 'name'
            }),
            'edit-email': () => accModal.open({
                title: i18n.t('modal.edit_email'),
                subtitle: i18n.t('modal.edit_email_desc'),
                icon: 'fas fa-envelope',
                inputIcon: 'fas fa-envelope',
                value: accountData.email,
                type: 'email',
                field: 'email'
            }),
            'edit-phone': () => accModal.open({
                title: i18n.t('modal.edit_phone'),
                subtitle: i18n.t('modal.edit_phone_desc'),
                icon: 'fab fa-whatsapp',
                inputIcon: 'fab fa-whatsapp',
                value: accountData.phone,
                type: 'tel',
                field: 'phone'
            }),
            'change-password': () => passModal.open(),
            'two-factor': () => {
                if (accountData.twoFactor) {
                    confirmModal.open({
                        title: 'تعطيل التحقق؟',
                        subtitle: 'سيقل مستوى حماية حسابك',
                        onConfirm: () => {
                            accountData.twoFactor = false;
                            document.getElementById('toggleTwoFactor').checked = false;
                            showToast('✅ ' + i18n.t('otp.success_2fa_off'));
                        }
                    });
                } else {
                    twoFAModal.open();
                }
            },
            'my-orders': () => showToast('📦 ' + i18n.t('toast.coming_soon')),
            'language': () => langModal.open(),
            'about': () => aboutModal.open()
        };
        if (actions[action]) actions[action]();
    }

    // ============================================
    // ===== BIND EVENTS =====
    // ============================================
    function bindEvents() {
        // عناصر القائمة
        document.querySelectorAll('#page-account .account-item[data-action]').forEach(item => {
            item.addEventListener('click', function(e) {
                // لو الضغط على toggle، ما نفتحش النافذة
                if (e.target.closest('.acc-toggle')) return;
                const action = this.dataset.action;
                if (action && action !== 'two-factor') handleAccountAction(action);
            });
        });

        // Toggle عنصر التحقق بخطوتين
        const toggle2FA = document.getElementById('toggleTwoFactor');
        if (toggle2FA) {
            toggle2FA.addEventListener('change', function(e) {
                if (this.checked) {
                    // ملاحظة: toggleSystem بيعالجها، لكن نضيف تأكيد
                    handleAccountAction('two-factor');
                }
            });
        }

        // تعديل الصورة
        const avatarEditBtn = document.getElementById('avatarEditBtn');
        if (avatarEditBtn) {
            avatarEditBtn.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                            document.getElementById('accountAvatar').innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
                        };
                        reader.readAsDataURL(file);
                    }
                };
                input.click();
            });
        }

        // تسجيل الخروج
        const logoutBtn = document.getElementById('accountLogoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                confirmModal.open({
                    title: i18n.t('confirm.logout_title'),
                    subtitle: i18n.t('confirm.logout_desc'),
                    onConfirm: () => showToast('👋 ' + i18n.t('toast.logged_out'))
                });
            });
        }
    }

    // ============================================
    // ===== INIT ============================================
    // ============================================
    function init() {
        accModal.init();
        passModal.init();
        twoFAModal.init();
        langModal.init();
        aboutModal.init();
        confirmModal.init();
        toggleSystem.init();
        renderAccountStats();
        renderAccountInfo();
        bindEvents();
        console.log('👤 REDEEM STORE - Account Ready');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
