import React from "react";
import { Divider } from "semantic-ui-react";

export default function Foot() {
  return (
    <div>
      <div className="ui hidden divider"></div>
      <div className="ui divider"></div>
      <footer>© {new Date().getFullYear()} HRMS, Tüm Hakları Saklıdır.</footer>
      <Divider hidden />
      <Divider hidden />
    </div>
  );
}
