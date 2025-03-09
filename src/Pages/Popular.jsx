import style from "./Popular.module.css";

function Popular() {
  return (
    <div className={style.popular} id="popular">
      <div className={style.popularContainer}>
        <h3>
          Iconic BMW Innovations:
          <br /> The Best of Performance & Design
        </h3>

        <div className={style.popularBox}>
          <div className={style.box}>
            <div className={style.popularCard}>
              <h4 className={style.title}>M5 Touring</h4>
              <p>
                4.4-liter BMW M TwinPower Turbo V-8, M xDrive all-wheel-drive
                system with 2-wheel drive capability
              </p>

              <img src="./popular-1.webp" alt="" />
              <h5 className={style.price}>$121,500</h5>
            </div>
            <div className={style.popularCard}>
              <h4 className={style.title}>M4 Competition xDrive Convertible</h4>
              <p>
                3.0-liter BMW M TwinPower Turbo inline 6-cylinder, M xDrive
                all-wheel-drive system
              </p>

              <img src="./popular-3.webp" alt="" />
              <h5 className={style.price}>$96,200</h5>
            </div>
            <div className={style.popularCard}>
              <h4 className={style.title}>i7 M70 Sedan</h4>
              <p>
                Dual high-performance electric motors, xDrive all-wheel drive
              </p>

              <img src="./popular-4.webp" alt="" />
              <h5 className={style.price}>$168,500</h5>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.popularCard}>
              <h4 className={style.title}>M8 Competition Convertible</h4>
              <p>
                4.4-liter BMW M TwinPower Turbo V-8, M xDrive all-wheel-drive
                system with 2-wheel drive capability
              </p>

              <img src="./popular-2.webp" alt="BWM" />
              <h5 className={style.price}>$150,000</h5>
            </div>

            <div className={style.popularCard}>
              <h4 className={style.title}>M8 Competition Gran Coupe</h4>
              <p>
                4.4-liter BMW M TwinPower Turbo V-8, M xDrive all-wheel-drive
                system with 2-wheel drive capability
              </p>

              <img src="./popular-5.webp" alt="" />
              <h5 className={style.price}>$140,000</h5>
            </div>
            <div className={style.popularCard}>
              <h4 className={style.title}>BMW XM</h4>
              <p>
                4.4-liter BMW M TwinPower Turbo V-8 paired with plug-in hybrid
                technology, M xDrive all-wheel-drive system
              </p>

              <img src="./popular-6.webp" alt="" />
              <h5 className={style.price}>$160,500</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
