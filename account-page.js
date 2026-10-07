/*
 * REDEEM STORE - Account Page Component
 *
 * يتم تحميل هذا الملف مسبقًا مع المتجر، ثم يضيف صفحة الحساب داخل نفس DOM.
 * لا يوجد انتقال إلى HTML جديد ولا إعادة تحميل للصفحة.
 * تصميم وتأثيرات صفحة الحساب الأصلية محفوظة.
 */
(function () {
    'use strict';

    const ACCOUNT_CSS = `/* ===== ACCOUNT PAGE ===== */
/* ============================================ */
#page-account {
    padding: 0 0 30px 0;
    background: #F5F7FA;
}

/* Hero */
.account-hero {
    background: linear-gradient(145deg, #1A73E8, #0D47A1);
    padding: 32px 24px 60px;
    border-radius: 0 0 32px 32px;
    position: relative;
    overflow: hidden;
    text-align: center;
    margin-bottom: -40px;
}

.account-hero::after {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.account-hero::before {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

/* Avatar */
.account-avatar-wrapper {
    position: relative;
    display: inline-block;
    z-index: 2;
    margin-bottom: 12px;
}

.account-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgba(255,255,255,0.25);
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    color: #1A73E8;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.account-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.account-avatar-edit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #FFFFFF;
    color: #1A73E8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.25s ease;
}

.account-avatar-edit:active {
    transform: scale(0.9);
}

.account-name {
    font-size: 22px;
    font-weight: 800;
    color: #FFFFFF;
    position: relative;
    z-index: 2;
    margin: 0;
    letter-spacing: 0.3px;
}

.account-phone {
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    position: relative;
    z-index: 2;
    margin-top: 4px;
    font-weight: 400;
}

.account-verified-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,255,255,0.15);
    color: #FFFFFF;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 600;
    margin-top: 10px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.12);
}

.account-verified-badge i {
    color: #6EF3E8;
    font-size: 12px;
}

/* Stats */
.account-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 16px;
    margin-bottom: 20px;
    position: relative;
    z-index: 3;
}

.account-stat-card {
    background: #FFFFFF;
    border-radius: 16px;
    padding: 16px 8px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border: 1px solid #f0f0f0;
    transition: all 0.25s ease;
}

.account-stat-card:active {
    transform: scale(0.97);
}

.account-stat-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
    font-size: 18px;
    background: #E8F0FE;
    color: #1A73E8;
}

.account-stat-card:nth-child(2) .account-stat-icon {
    background: rgba(245, 158, 11, 0.12);
    color: #F59E0B;
}

.account-stat-value {
    font-size: 18px;
    font-weight: 800;
    color: #1A1A2E;
    line-height: 1.2;
}

.account-stat-label {
    font-size: 11px;
    color: #888;
    font-weight: 500;
    margin-top: 2px;
}

/* Body */
.account-body {
    padding: 0 16px;
}

.account-section {
    background: #FFFFFF;
    border-radius: 18px;
    margin-bottom: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    border: 1px solid #f0f0f0;
    overflow: hidden;
}

.account-section-title {
    font-size: 14px;
    font-weight: 800;
    color: #1A1A2E;
    padding: 16px 18px 10px;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.account-section-title i {
    color: #1A73E8;
    font-size: 15px;
}

.account-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    border-top: 1px solid #f5f5f5;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.account-item:active {
    background: #f8f9fa;
}

.account-item-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
}

.account-item-icon {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
    background: #E8F0FE;
    color: #1A73E8;
}

.account-item-icon.green { background: rgba(16,185,129,0.12); color: #10B981; }
.account-item-icon.orange { background: rgba(245,158,11,0.12); color: #F59E0B; }
.account-item-icon.red { background: rgba(239,68,68,0.10); color: #EF4444; }
.account-item-icon.purple { background: rgba(139,92,246,0.12); color: #8B5CF6; }
.account-item-icon.cyan { background: rgba(0,188,212,0.12); color: #00BCD4; }

.account-item-info {
    flex: 1;
    min-width: 0;
}

.account-item-info h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1A1A2E;
    margin: 0 0 2px;
    line-height: 1.3;
}

.account-item-info p {
    font-size: 12px;
    color: #999;
    margin: 0;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.account-item-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.account-item-right i.fa-chevron-left {
    color: #bbb;
    font-size: 13px;
    transition: all 0.2s ease;
}

.account-item:active .account-item-right i.fa-chevron-left {
    transform: translateX(-3px);
    color: #1A73E8;
}

.account-item-badge {
    font-size: 10px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 50px;
    background: rgba(16,185,129,0.12);
    color: #10B981;
    letter-spacing: 0.2px;
}

.account-item-badge.off {
    background: rgba(239,68,68,0.10);
    color: #EF4444;
}

/* Logout */
.account-logout {
    margin: 8px 0 0;
    width: 100%;
    padding: 15px 20px;
    background: #FFFFFF;
    color: #EF4444;
    border: 1.5px solid rgba(239,68,68,0.25);
    border-radius: 14px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    -webkit-tap-highlight-color: transparent;
    font-family: inherit;
}

.account-logout:active {
    background: rgba(239,68,68,0.06);
    transform: scale(0.98);
}

.account-logout i {
    font-size: 16px;
}

.account-footer-note {
    text-align: center;
    padding: 20px 0 10px;
    font-size: 11px;
    color: #bbb;
    font-weight: 400;
    letter-spacing: 0.3px;
}

.account-footer-note i {
    color: #1A73E8;
    margin: 0 3px;
}

/* Responsive */
@media (max-width: 420px) {
    .account-hero { padding: 24px 18px 52px; }
    .account-avatar { width: 88px; height: 88px; font-size: 36px; }
    .account-name { font-size: 19px; }
    .account-stat-card { padding: 13px 6px; border-radius: 14px; }
    .account-stat-icon { width: 36px; height: 36px; font-size: 15px; border-radius: 10px; }
    .account-stat-value { font-size: 16px; }
    .account-stat-label { font-size: 10px; }
    .account-item { padding: 12px 14px; }
    .account-item-info h4 { font-size: 13px; }
    .account-section-title { padding: 14px 14px 8px; font-size: 13px; }
}
`;
    const ACCOUNT_HTML = `<div id="page-account" class="page">
        <!-- Hero -->
        <div class="account-hero">
            <div class="account-avatar-wrapper">
                <div class="account-avatar" id="accountAvatar">
                    <i class="fas fa-user"></i>
                </div>
                <button class="account-avatar-edit" id="avatarEditBtn" aria-label="تغيير الصورة">
                    <i class="fas fa-camera"></i>
                </button>
            </div>
            <h2 class="account-name" id="accountName">مستخدم REDEEM</h2>
            <p class="account-phone" id="accountPhone">+249 901 839 168</p>
            <span class="account-verified-badge">
                <i class="fas fa-check-circle"></i>
                حساب موثّق
            </span>
        </div>

        <!-- Stats -->
        <div class="account-stats">
            <div class="account-stat-card">
                <div class="account-stat-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <div class="account-stat-value" id="statOrders">12</div>
                <div class="account-stat-label">الطلبات</div>
            </div>
            <div class="account-stat-card">
                <div class="account-stat-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="account-stat-value" id="statPoints">250</div>
                <div class="account-stat-label">النقاط</div>
            </div>
        </div>

        <!-- Body -->
        <div class="account-body">

            <!-- معلومات الحساب -->
            <div class="account-section">
                <div class="account-section-title">
                    <i class="fas fa-user-circle"></i>
                    <span>معلومات الحساب</span>
                </div>

                <div class="account-item" data-action="edit-name">
                    <div class="account-item-left">
                        <div class="account-item-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>الاسم الكامل</h4>
                            <p id="infoName">مستخدم REDEEM</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="edit-email">
                    <div class="account-item-left">
                        <div class="account-item-icon cyan">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>البريد الإلكتروني</h4>
                            <p id="infoEmail">user@redeemstore.com</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="edit-phone">
                    <div class="account-item-left">
                        <div class="account-item-icon green">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>رقم واتساب</h4>
                            <p id="infoPhone">+249 901 839 168</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>
            </div>

            <!-- الأمان -->
            <div class="account-section">
                <div class="account-section-title">
                    <i class="fas fa-shield-alt"></i>
                    <span>الأمان والخصوصية</span>
                </div>

                <div class="account-item" data-action="change-password">
                    <div class="account-item-left">
                        <div class="account-item-icon orange">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>تغيير كلمة المرور</h4>
                            <p>آخر تحديث قبل 30 يوم</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="two-factor">
                    <div class="account-item-left">
                        <div class="account-item-icon purple">
                            <i class="fas fa-fingerprint"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>التحقق بخطوتين</h4>
                            <p>حماية إضافية لحسابك</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <span class="account-item-badge off" id="twoFactorBadge">معطّل</span>
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>
            </div>

            <!-- الطلبات والإعدادات -->
            <div class="account-section">
                <div class="account-section-title">
                    <i class="fas fa-cog"></i>
                    <span>الطلبات والإعدادات</span>
                </div>

                <div class="account-item" data-action="my-orders">
                    <div class="account-item-left">
                        <div class="account-item-icon">
                            <i class="fas fa-receipt"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>طلباتي</h4>
                            <p>عرض جميع طلباتك السابقة</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="notifications">
                    <div class="account-item-left">
                        <div class="account-item-icon orange">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>الإشعارات</h4>
                            <p>إدارة تنبيهاتك</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <span class="account-item-badge">مفعّلة</span>
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="language">
                    <div class="account-item-left">
                        <div class="account-item-icon cyan">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>اللغة</h4>
                            <p>العربية</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="support">
                    <div class="account-item-left">
                        <div class="account-item-icon green">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>الدعم الفني</h4>
                            <p>تواصل معنا في أي وقت</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>

                <div class="account-item" data-action="about">
                    <div class="account-item-left">
                        <div class="account-item-icon">
                            <i class="fas fa-info-circle"></i>
                        </div>
                        <div class="account-item-info">
                            <h4>عن التطبيق</h4>
                            <p>REDEEM STORE v1.0.0</p>
                        </div>
                    </div>
                    <div class="account-item-right">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>
            </div>

            <!-- Logout -->
            <button class="account-logout" id="accountLogoutBtn">
                <i class="fas fa-sign-out-alt"></i>
                <span>تسجيل الخروج</span>
            </button>

            <div class="account-footer-note">
                <i class="fas fa-heart"></i>
                REDEEM STORE © 2026
            </div>
        </div>
    </div>`;

    // إضافة CSS مرة واحدة فقط.
    if (!document.getElementById('redeem-account-component-style')) {
        const style = document.createElement('style');
        style.id = 'redeem-account-component-style';
        style.textContent = ACCOUNT_CSS;
        document.head.appendChild(style);
    }

    function mountAccountPage() {
        if (document.getElementById('page-account')) return;

        const host = document.querySelector('.page-container') || document.body;
        const nav = host.querySelector('#bottomNav');
        const wrapper = document.createElement('div');
        wrapper.innerHTML = ACCOUNT_HTML.trim();
        const page = wrapper.firstElementChild;

        if (nav) host.insertBefore(page, nav);
        else host.appendChild(page);

        // Override only the host page spacing so the account CSS is not changed
        // by the main store's generic .page rule.
        page.style.padding = '0 0 30px 0';
        page.style.background = '#F5F7FA';

        // Bind account interactions after the DOM is mounted.
        const accountData = {
            name: 'مستخدم REDEEM',
            email: 'user@redeemstore.com',
            phone: '+249 901 839 168',
            orders: 12,
            points: 250,
            twoFactor: false
        };

        const $ = (id) => page.querySelector('#' + id);

        function renderAccountStats() {
            const statOrders = $('statOrders');
            const statPoints = $('statPoints');
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
                const el = $(id);
                if (el) el.textContent = ids[id];
            });
        }

        function handleAccountAction(action) {
            const actions = {
                'edit-name': () => {
                    const newName = prompt('أدخل الاسم الجديد:', accountData.name);
                    if (newName && newName.trim()) { accountData.name = newName.trim(); renderAccountInfo(); alert('✅ تم تحديث الاسم بنجاح'); }
                },
                'edit-email': () => {
                    const newEmail = prompt('أدخل البريد الإلكتروني الجديد:', accountData.email);
                    if (newEmail && newEmail.trim()) { accountData.email = newEmail.trim(); renderAccountInfo(); alert('✅ تم تحديث البريد الإلكتروني'); }
                },
                'edit-phone': () => {
                    const newPhone = prompt('أدخل رقم الواتساب الجديد:', accountData.phone);
                    if (newPhone && newPhone.trim()) { accountData.phone = newPhone.trim(); renderAccountInfo(); alert('✅ تم تحديث رقم الواتساب'); }
                },
                'change-password': () => alert('🔒 سيتم توجيهك لصفحة تغيير كلمة المرور'),
                'two-factor': () => {
                    accountData.twoFactor = !accountData.twoFactor;
                    const badge = $('twoFactorBadge');
                    if (badge) { badge.textContent = accountData.twoFactor ? 'مفعّل' : 'معطّل'; badge.classList.toggle('off', !accountData.twoFactor); }
                    alert(accountData.twoFactor ? '✅ تم تفعيل التحقق بخطوتين' : '⚠️ تم تعطيل التحقق بخطوتين');
                },
                'my-orders': () => alert('📦 سيتم توجيهك لصفحة الطلبات'),
                'notifications': () => alert('🔔 سيتم توجيهك لإعدادات الإشعارات'),
                'language': () => alert('🌐 اللغة الحالية: العربية'),
                'support': () => alert('🎧 سيتم توجيهك لصفحة الدعم'),
                'about': () => alert('ℹ️ REDEEM STORE\nالإصدار: 1.0.0\n© 2026 جميع الحقوق محفوظة')
            };
            if (actions[action]) actions[action]();
        }

        page.querySelectorAll('.account-item').forEach(item => item.addEventListener('click', function () {
            const action = this.dataset.action;
            if (action) handleAccountAction(action);
        }));

        const avatarEditBtn = $('avatarEditBtn');
        if (avatarEditBtn) avatarEditBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const avatar = $('accountAvatar');
                    if (avatar) avatar.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
                };
                reader.readAsDataURL(file);
            };
            input.click();
        });

        const logoutBtn = $('accountLogoutBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) alert('👋 تم تسجيل الخروج بنجاح');
        });

        renderAccountStats();
        renderAccountInfo();
    }

    // تركيب الصفحة أثناء تحميل المتجر، وليس عند ضغط المستخدم.
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountAccountPage);
    else mountAccountPage();
})();
