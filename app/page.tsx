"use client";

import { SectionViewTracker } from "@/components/SectionViewTracker";
import { trackContactClick } from "@/lib/gtag";
import { useEffect, useState } from "react";

/** スマホ: fixedヘッダー分のオフセット（アンカー時に見出しが隠れないように） */
const scrollAnchorMobile = "max-md:scroll-mt-[7.75rem]";

export default function Home() {
  const [showScrollCta, setShowScrollCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("top");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;

      const heroRect = hero.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;

      const passedHero = heroRect.bottom < viewportHeight * 0.2;
      const beforeContact = contactRect.top > viewportHeight * 0.6;

      setShowScrollCta(passedHero && beforeContact);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <SectionViewTracker />
      <header>
        <div className="header-inner">
          <div className="logo shrink-0">大阪タワマンのインテリア相談室</div>
          <div className="min-w-0 w-full max-md:-mx-1 max-md:overflow-x-auto max-md:overscroll-x-contain max-md:touch-pan-x max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden md:contents md:min-w-0 md:w-auto">
            <nav
              className="header-nav max-md:w-max max-md:gap-5 max-md:py-0.5 max-md:pr-1 md:w-auto md:gap-[22px] md:py-0 md:pr-0"
              aria-label="セクションナビゲーション"
            >
              <a href="#concept">Concept</a>
              <a href="#services">Features</a>
              <a href="#flow">Flow</a>
              <a href="#plans">Plans</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className={`hero ${scrollAnchorMobile}`} id="top" data-analytics-section="hero">
        <div className="container hero-content">
          <div className="hero-label">Osaka Tower Mansion Interior</div>
          <h1 className="hero-title">
            大阪のタワマンを、
            <br />
            <em>あなたの家</em>にする。
          </h1>
          <p className="hero-description">
            タワマンを買っても、暮らしは自動的には完成しない。
            <br />
            あなたの毎日から逆算した家具選びと空間づくりを、
            <br />
            ヒアリングから設置まで一貫して代行します。
          </p>
          <a
            href="#contact"
            className="hero-cta"
            onClick={() => trackContactClick("hero")}
          >
            LINEで無料相談する
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <a href="#problems" className="hero-scroll">
          Scroll
        </a>
      </section>

      <section
        className={`section problems ${scrollAnchorMobile}`}
        id="problems"
        data-analytics-section="problems"
      >
        <div className="container">
          <div className="section-label">Problems</div>
          <h2 className="section-title">こんなお悩みはありませんか？</h2>
          <div className="divider" />
          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-image">
                <img src="/images/Problems1.png" alt="問題1のイメージ" />
              </div>
              <div className="problem-num">01</div>
              <h3 className="problem-title">
                何から手をつければいいか
                <br />
                分からない
              </h3>
              <p className="problem-text">
                タワマンを買ったけれど、この広いリビングに何をどう置けばいいのか。賃貸の家具をそのまま持ってきたけど、なんか違う。
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-image">
                <img src="/images/Problems2.png" alt="問題2のイメージ" />
              </div>
              <div className="problem-num">02</div>
              <h3 className="problem-title">
                調べすぎて、
                <br />
                決められない
              </h3>
              <p className="problem-text">
                Pinterestの保存は200件超え。カッシーナにも行った。でも「本当にこれでいいのか」が分からず、ずっと保留のまま。
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-image">
                <img src="/images/Problems3.png" alt="問題3のイメージ" />
              </div>
              <div className="problem-num">03</div>
              <h3 className="problem-title">
                忙しくて、
                <br />
                家具選びに時間が取れない
              </h3>
              <p className="problem-text">
                平日は仕事、土日は他の予定。家具のことを考える時間も気力も足りない。誰かに整理してほしい。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${scrollAnchorMobile}`} id="concept" data-analytics-section="concept">
        <div className="container">
          <div className="concept-block">
            <div className="concept-text">
              <div className="section-label">Concept</div>
              <h3>
                暮らし方から逆算する、
                <br />
                あなただけの空間づくり
              </h3>
              <p>
                家具のカタログを並べるだけでは、心地よい空間は生まれません。朝のコーヒーをどこで飲むか。仕事から帰って最初に座る場所はどこか。休日の午後、夫婦それぞれがどう過ごすか。
              </p>
              <p>
                あなたの暮らし方を起点に、タワマンの空間特性を活かした提案をします。天井高、窓からの光、眺望。それらを「あなたの家」にするための家具選びと配置を、理由付きでご提案します。
              </p>
              <p>なぜこのソファか。なぜこの色か。すべてに理由があるから、納得して選べます。</p>
            </div>
            <div className="concept-visual">
              <img src="/images/Concept.png" alt="暮らしの提案イメージ" className="concept-image" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section features ${scrollAnchorMobile}`}
        id="services"
        data-analytics-section="features"
      >
        <div className="container">
          <div className="section-label">Features</div>
          <h2 className="section-title">選ばれる理由</h2>
          <p className="section-subtitle">大阪のタワマンに特化しているから、できることがあります。</p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-image">
                <img src="/images/Features1.jpg" alt="大阪タワマン特化のイメージ" />
              </div>
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="feature-title">大阪タワマン特化</h3>
              <p className="feature-text">
                中之島、北浜、堂島、梅田、十三。大阪の主要タワマンの空間特性と周辺環境を熟知した上で提案します。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="feature-title">暮らし起点のヒアリング</h3>
              <p className="feature-text">
                家具の好みではなく、暮らし方から聞きます。「どう過ごしたいか」を言葉にするところから、一緒に始めます。
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="feature-title">購入・設置まで一貫代行</h3>
              <p className="feature-text">
                提案で終わりではありません。1,000以上のブランドから家具を選定し、購入手配から搬入設置までワンストップで対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${scrollAnchorMobile}`} id="flow" data-analytics-section="flow">
        <div className="container">
          <div className="section-label">Flow</div>
          <h2 className="section-title">ご依頼の流れ</h2>
          <p className="section-subtitle">
            LINEでのご相談から、家具の設置完了まで。最短14日で、あなたの空間が変わります。
          </p>
          <div className="flow-list">
            <div className="flow-item">
              <div className="flow-num">01</div>
              <div className="flow-content">
                <div className="flow-image">
                  <img src="/images/FLOW1.png" alt="LINE無料相談のイメージ" />
                </div>
                <h4>LINE無料相談</h4>
                <p>
                  まずはLINEでお気軽にご相談ください。お住まいの物件、困っていること、理想の暮らしのイメージをお聞かせいただきます。
                </p>
              </div>
            </div>
            <div className="flow-item">
              <div className="flow-num">02</div>
              <div className="flow-content">
                <div className="flow-image">
                  <img src="/images/FLOW2.png" alt="ヒアリング・採寸のイメージ" />
                </div>
                <h4>ヒアリング・採寸</h4>
                <p>
                  暮らし方・好み・ご予算をじっくりお伺いします。お部屋の採寸と空間の観察を行い、タワマン特有の空間特性を把握します。
                </p>
              </div>
            </div>
            <div className="flow-item">
              <div className="flow-num">03</div>
              <div className="flow-content">
                <div className="flow-image">
                  <img src="/images/FLOW3.png" alt="3Dパース・ご提案のイメージ" />
                </div>
                <h4>3Dパース・ご提案</h4>
                <p>
                  リアルな3DCGで空間イメージをご提案。家具リストではなく「この空間でこう過ごせます」というシナリオでお見せします。なぜこの選択かの理由もセットでお渡しします。
                </p>
              </div>
            </div>
            <div className="flow-item">
              <div className="flow-num">04</div>
              <div className="flow-content">
                <div className="flow-image">
                  <img src="/images/FLOW4.png" alt="家具購入・搬入設置のイメージ" />
                </div>
                <h4>家具購入・搬入設置</h4>
                <p>
                  ご納得いただけましたら、家具の購入手配から搬入・設置まで全て代行します。あなたは届くのを待つだけです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section pricing ${scrollAnchorMobile}`}
        id="plans"
        data-analytics-section="plans"
      >
        <div className="container">
          <div className="section-label">Plans</div>
          <h2 className="section-title">料金プラン</h2>
          <p className="section-subtitle">お客様の状況に合わせて、3つのプランをご用意しています。</p>
          <div className="pricing-grid">
            <div className="plan-card">
              <div className="plan-name">Light</div>
              <div className="plan-price">¥30,000</div>
              <div className="plan-tax">税込</div>
              <ul className="plan-features">
                <li>インテリアコーディネート</li>
                <li>商品リスト（URL付き）の送付</li>
                <li>修正：1回まで</li>
              </ul>
              <a
                href="#contact"
                className="plan-cta"
                onClick={() => trackContactClick("plan")}
              >
                このプランで相談する
              </a>
            </div>
            <div className="plan-card recommended">
              <div className="plan-badge">もっとも人気</div>
              <div className="plan-name">Basic</div>
              <div className="plan-price">¥50,000</div>
              <div className="plan-tax">税込</div>
              <ul className="plan-features">
                <li>インテリアコーディネート</li>
                <li>商品リスト（URL付き）の送付</li>
                <li>CG（3Dパース）作成</li>
                <li>修正：2回まで</li>
              </ul>
              <a
                href="#contact"
                className="plan-cta"
                onClick={() => trackContactClick("plan")}
              >
                このプランで相談する
              </a>
            </div>
            <div className="plan-card">
              <div className="plan-name">Premium</div>
              <div className="plan-price">¥90,000</div>
              <div className="plan-tax">税込</div>
              <ul className="plan-features">
                <li>インテリアコーディネート</li>
                <li>商品リスト（URL付き）の送付</li>
                <li>CG（3Dパース）作成</li>
                <li>修正：3回まで</li>
                <li>採寸、商品発注代行、受取日程の調整</li>
              </ul>
              <a
                href="#contact"
                className="plan-cta"
                onClick={() => trackContactClick("plan")}
              >
                このプランで相談する
              </a>
            </div>
          </div>
          <p className="pricing-note">
            ※ 上記はコーディネート料金です。家具代は別途実費となります。
            <br />※ お部屋の広さや内容により変動する場合がございます。お気軽にご相談ください。
          </p>
        </div>
      </section>

      <section
        className={`section ${scrollAnchorMobile}`}
        id="speciality"
        data-analytics-section="why_osaka"
      >
        <div className="container">
          <div className="section-label">Why Osaka</div>
          <h2 className="section-title">大阪タワマンに特化する理由</h2>
          <p className="section-subtitle">
            物件を知り、街を知り、暮らしを想像できること。それがコーディネートの精度を決めます。
          </p>
          <div className="speciality-list">
            <div className="speciality-item">
              <h4>物件ごとの空間特性を把握</h4>
              <p>
                天井高、窓の方角、建具の色、採光条件。物件ごとに異なる空間特性を踏まえた提案ができるのは、大阪のタワマンを熟知しているからです。
              </p>
            </div>
            <div className="speciality-item">
              <div className="speciality-image">
                <img src="/images/WhyOsaka2.png" alt="生活圏を理解した提案のイメージ" />
              </div>
              <h4>生活圏を理解した提案</h4>
              <p>
                中之島の川沿いを散歩する朝、北浜のカフェで過ごす休日。あなたの生活圏を知っているからこそ、暮らしに寄り添った空間を提案できます。
              </p>
            </div>
            <div className="speciality-item">
              <h4>採寸・納品に物理的に対応</h4>
              <p>
                大阪在住だからこそ、現地採寸や納品立ち会いに迅速に対応。オンラインだけでは見落とすディテールもしっかり確認します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section cta-section ${scrollAnchorMobile}`}
        id="contact"
        data-analytics-section="contact"
      >
        <div className="container cta-content">
          <div className="section-label section-label-contact">Contact</div>
          <h2 className="cta-title">まずは、お気軽にご相談ください。</h2>
          <p className="cta-text">
            初回のヒアリングは無料です。
            <br />
            「何から始めればいいか分からない」というご相談だけでも大丈夫です。
          </p>
          <a
            href="https://lin.ee/stqqiHK8"
            className="cta-button"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContactClick("final")}
          >
            LINEで無料相談する
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="cta-note">※ LINE公式アカウントが開きます</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-logo">大阪タワマンのインテリア相談室</div>
          <p className="footer-tagline">大阪のタワマンを、あなたの家にする。</p>
          <div className="footer-links">
            <a href="#concept">コンセプト</a>
            <a href="#services">サービス</a>
            <a href="#plans">料金プラン</a>
            <a href="#flow">ご依頼の流れ</a>
            <a href="#contact">お問い合わせ</a>
          </div>
          <p className="footer-copy">&copy; 2026 大阪タワマンのインテリア相談室. All rights reserved.</p>
        </div>
      </footer>

      {showScrollCta && (
        <a
          href="#contact"
          className="scroll-cta"
          onClick={() => trackContactClick("fixed")}
        >
          LINEで無料相談する
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </>
  );
}
