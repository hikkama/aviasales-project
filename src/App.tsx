import logo from './assets/img/Logo.svg'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <section className="wrapper">
        <aside className="filter">
          <h3 className="filter-title">Количество пересадок</h3>
          <div className="filter-inputs">
            <label>
              <input type="checkbox" className="input" />
              <span className="checkbox"></span>
              Все
            </label>

            <label>
              <input type="checkbox" className="input" checked />
              <span className="checkbox"></span>
              Без пересадок
            </label>

            <label>
              <input type="checkbox" className="input" checked />
              <span className="checkbox"></span>1 пересадка
            </label>

            <label>
              <input type="checkbox" className="input" checked />
              <span className="checkbox"></span>2 пересадки
            </label>

            <label>
              <input type="checkbox" className="input" />
              <span className="checkbox"></span>3 пересадки
            </label>
          </div>
        </aside>
        <div className="main-content">
          <div className="filter-btns">
            <button type="button">Самый дешевый</button>
            <button type="button">Самый быстрый</button>
            <button type="button">Оптимальный</button>
          </div>
          <div className="flightes">
            <div className="fligth-card">
              <div className="card-header">
                <div className="card-price">13 400P</div>
                <div className="card-aircompany">
                  <img src="./assets/img/S7 Logo.png" alt="aircompany-logo" />
                </div>
              </div>
              <div className="card-info">
                <div className="card-path">
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">10:45 – 08:00</div>
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">11:20 – 00:50</div>
                </div>
                <div className="card-time">
                  <div className="card-title">В пути</div>
                  <div className="card-desc">21ч 15м</div>
                  <div className="card-title">В пути</div>
                  <div className="card-desc">13ч 30м</div>
                </div>
                <div className="card-change">
                  <div className="card-title">2 пересадки</div>
                  <div className="card-desc">HKG, JNB</div>
                  <div className="card-title">1 пересадка</div>
                  <div className="card-desc">HKG</div>
                </div>
              </div>
            </div>
            <div className="fligth-card">
              <div className="card-header">
                <div className="card-price">13 400P</div>
                <div className="card-aircompany">
                  <img src="./assets/img/S7 Logo.png" alt="aircompany-logo" />
                </div>
              </div>
              <div className="card-info">
                <div className="card-path">
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">10:45 – 08:00</div>
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">11:20 – 00:50</div>
                </div>
                <div className="card-time">
                  <div className="card-title">В пути</div>
                  <div className="card-desc">21ч 15м</div>
                  <div className="card-title">В пути</div>
                  <div className="card-desc">13ч 30м</div>
                </div>
                <div className="card-change">
                  <div className="card-title">2 пересадки</div>
                  <div className="card-desc">HKG, JNB</div>
                  <div className="card-title">1 пересадка</div>
                  <div className="card-desc">HKG</div>
                </div>
              </div>
            </div>
            <div className="fligth-card">
              <div className="card-header">
                <div className="card-price">13 400P</div>
                <div className="card-aircompany">
                  <img src="./assets/img/S7 Logo.png" alt="aircompany-logo" />
                </div>
              </div>
              <div className="card-info">
                <div className="card-path">
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">10:45 – 08:00</div>
                  <div className="card-title">MOW – HKT</div>
                  <div className="card-desc">11:20 – 00:50</div>
                </div>
                <div className="card-time">
                  <div className="card-title">В пути</div>
                  <div className="card-desc">21ч 15м</div>
                  <div className="card-title">В пути</div>
                  <div className="card-desc">13ч 30м</div>
                </div>
                <div className="card-change">
                  <div className="card-title">2 пересадки</div>
                  <div className="card-desc">HKG, JNB</div>
                  <div className="card-title">1 пересадка</div>
                  <div className="card-desc">HKG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
