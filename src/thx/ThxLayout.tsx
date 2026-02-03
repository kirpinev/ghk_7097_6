import { Typography } from "@alfalab/core-components/typography";
import moai from "../assets/moon.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Gap } from "@alfalab/core-components/gap";
import { useEffect } from "react";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "7097_get_real_sub", {
      variant_name: "ghk_7097_6",
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white !important";
  }, []);

  return (
    <>
      <div className={thxSt.container} style={{ backgroundColor: "white" }}>
        <img
          alt="Картинка ракеты"
          src={moai}
          width={200}
          className={thxSt.rocket}
        />
        <Gap size={16} />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="medium"
          weight="bold"
        >
          Теперь вы знаете секрет
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text tag="p" view="primary-medium">
          Мы проводим очень важное исследование для нового сервиса. Скоро
          поделимся с вами подробностями!
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="https://online.alfabank.ru/debit_card_showcase?flowType=KIDS"
          onClick={submit}
        >
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
