import React from "react";

export default function Foot() {
  return (
    <div>
      <div class="ui hidden divider"></div>
      <div class="ui divider"></div>
      <footer>© {new Date().getFullYear()} HRMS, Tüm Hakları Saklıdır.</footer>
    </div>
  );
}
