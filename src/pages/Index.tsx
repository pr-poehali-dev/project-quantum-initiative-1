export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">DANCE*NEWS</div>
        <nav>
          <a href="#">Новости</a>
          <a href="#">Конкурсы</a>
          <a href="#">Советы</a>
          <a href="#">Галерея</a>
        </nav>
        <button className="btn-cta">Подписаться</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТАНЦЫ —
              <br />
              ЭТО <span>жизнь</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Горячие новости из мира танцев, итоги соревнований и советы от настоящих профессионалов. Всё для тех, кто живёт в ритме.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Читать новости
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Итоги конкурсов
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              НОВОЕ
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #DANCENEWS
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              В РИТМЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ГОРЯЧИЕ НОВОСТИ ТАНЦЕВ * ИТОГИ ЧЕМПИОНАТОВ * СОВЕТЫ ОТ ПРОФИ * ХИП-ХОП * БАЛЬНЫЕ * CONTEMPORARY * БРЕЙК-ДАНС * УЛИЧНЫЕ ТАНЦЫ *
            ГОРЯЧИЕ НОВОСТИ ТАНЦЕВ * ИТОГИ ЧЕМПИОНАТОВ * СОВЕТЫ ОТ ПРОФИ * ХИП-ХОП * БАЛЬНЫЕ * CONTEMPORARY * БРЕЙК-ДАНС * УЛИЧНЫЕ ТАНЦЫ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ГЛАВНОЕ СЕГОДНЯ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все новости
            </a>
          </div>

          <div className="menu-grid">
            {/* Новость 1 */}
            <div className="menu-card">
              <span className="menu-tag">Горячее</span>
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Чемпионат по хип-хопу"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Чемпионат по хип-хопу</h3>
                  <span className="price">26 фев</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Московский баттл 2026 завершился — объявлены победители среди юниоров и взрослых. Кто взял главный приз?
                </p>
              </div>
            </div>

            {/* Новость 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Совет профи
              </span>
              <img
                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Советы хореографа"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>5 правил растяжки</h3>
                  <span className="price">Тренинг</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Хореограф сборной России делится техниками, которые спасут от травм и прокачают гибкость за месяц.</p>
              </div>
            </div>

            {/* Новость 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Итоги
              </span>
              <img
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бальные танцы"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Гран-при по бальным</h3>
                  <span className="price">24 фев</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Петербургский турнир по стандарту и латине — полная таблица результатов и фотоотчёт с финала.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">СОВЕТЫ ОТ МАСТЕРОВ.</h2>
            <p className="vibe-text">
              Мы собрали реальных профессионалов — чемпионов, хореографов, тренеров сборных. Они делятся не теорией, а живым опытом: как выигрывать соревнования, избегать травм и расти быстрее. Без воды — только по делу.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Все советы
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @DANCE.NEWS
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Танцы 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Танцы 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Танцы 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Танцы 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">DANCE*NEWS</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Главный медиа про танцы и жизнь танцоров. Новости, итоги конкурсов и советы от профессионалов — каждый день.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Новости
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Конкурсы
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Советы
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Рубрики</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Хип-хоп
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Бальные
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Contemporary
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Уличные
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Подписка</h4>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
            Получай свежие новости первым — подпишись на рассылку.
          </p>
          <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
            Подписаться
          </button>
        </div>
      </footer>
    </>
  );
}
