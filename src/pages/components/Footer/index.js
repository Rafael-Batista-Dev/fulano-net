import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    ENTRE EM CONTATO
                  </h3>
                  <p>Fique por dentro de nossas novidades!</p>

                  <form className="f_subscribe_two mailchimp">
                    <input type="text" name="EMAIL" placeholder="Email" />
                    <button className="btn btn_get btn-block btn_get_two">
                      Assinar!
                    </button>
                    <br />

                    <p
                      className="mchimp-errmessage"
                      style={{ display: "none" }}
                    ></p>
                    <p
                      className="mchimp-sucmessage"
                      style={{ display: "none" }}
                    ></p>
                  </form>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">SERVIÇOS</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">EMPRESAS</a>
                    </li>
                    <li>
                      <a href="/">INDIQUE UM AMIGO</a>
                    </li>
                    <li>
                      <a href="/">TRABALHE CONOSCO</a>
                    </li>
                    <li>
                      <a href="/">COLABORADOR</a>
                    </li>
                    <li>
                      <a href="/">NOSSOS ESCRITÓRIOS</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">CLIENTES</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">BRISACLIENTE</a>
                    </li>
                    <li>
                      <a href="/">FALE CONOSCO</a>
                    </li>
                    <li>
                      <a href="/">CALL CENTER</a>
                    </li>
                    <li>
                      <a href="/">SUPORTE REMOTO</a>
                    </li>
                    <li>
                      <a href="/">LIGAMOS PARA VOCÊ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">SOBRE NÓS</h3>
                  <p style={{ textAlign: "justify" }}>
                    A Brisanet trabalha há mais de 20 anos procurando inovar na
                    área de Telecomunicações, a fim de garantir qualidade aos
                    clientes, contando com o apoio de profissionais capacitados
                    para operar, incorporar, inovar e acompanhar as tendências
                    tecnológicas.
                  </p>
                  <div className="f_social_icon">
                    <a href="/" className="fa fa-facebook"></a>
                    <a href="/" className="fa fa-twitter"></a>
                    <a href="/" className="fa fa-linkedin"></a>
                    <a href="/" className="fa fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © Rafael .B Inc.. 2020 Todos os direitos reservados.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
