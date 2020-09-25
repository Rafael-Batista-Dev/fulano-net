import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="nb-form">
            <div className="user-icon">
              <i class="fa fa-comment"></i>
            </div>
            <p className="title-contact">Fale com um especialista</p>
            <form>
              <input type="text" name="cpname" placeholder="Nome:" required />
              <input
                type="email"
                name="cpemail"
                placeholder="Email:"
                required
              />
              <input
                type="tel"
                name="cpphone"
                placeholder="Telefone:"
                required
              />
              <textarea
                name="cpmessage"
                placeholder="Mensagem:"
                required
              ></textarea>
              <button className="btn btn_get btn-block btn_get_two">
                Enviar menssagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
