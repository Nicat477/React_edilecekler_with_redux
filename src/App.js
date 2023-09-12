import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addtobasket, completed, deletecomp } from "./actions/index";

const App = (props) => {
  const [text, settext] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button
          onClick={() => {
            settext("");
            props.addtobasket(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.completed(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => props.deletecomp()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    liste: state.liste
  };
};
export default connect(mapStateToProps, { addtobasket, completed, deletecomp })(
  App
);
