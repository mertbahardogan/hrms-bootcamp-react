import React from "react";
import { Button } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button.Group>
        <Button color="vk">Kayıt Ol</Button>
        <Button.Or text="|" />
        <Button onClick={signIn} color="grey">
          Giriş Yap
        </Button>
      </Button.Group>
    </div>
  );
}
