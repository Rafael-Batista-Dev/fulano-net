import React from "react";
import { Icon } from "react-icons-kit";
import { ic_insert_comment } from "react-icons-kit/md/ic_insert_comment";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="nb-form">
            <Icon className="user-icon" icon={ic_insert_comment} size={64} />

            <div className="title-contact">Fale com um especialista</div>
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
