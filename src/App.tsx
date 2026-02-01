import { Typography } from "@alfalab/core-components/typography";
import image from "./assets/image.png";
import point from "./assets/point_down.png";
import img2 from "./assets/img2.png";

import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { LS, LSKeys } from "./ls";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { List } from "@alfalab/core-components/list";
import { ThxLayout } from "./thx/ThxLayout.tsx";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const handleClickSubmit = () => {
    window.gtag("event", "7097_card_order_click", {
      variant_name: "7097_6",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img src={image} alt="" />
        <div style={{ padding: "0 16px" }}>
          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="small"
            className={appSt.productsTitle}
            style={{
              fontSize: "30px",
              color: "black",
              width: "100%",
              fontWeight: "normal",
            }}
          >
            Выгодная детская карта
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text>
            «Вот бы управлять деньгами учили с детства», — подумали мы и сделали
            бесплатную Детскую карту. С ней ребёнок может получать кэшбэк
            реальными деньгами — до 2000 ₽ каждый месяц.
          </Typography.Text>

          <Gap size={16} />

          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="small"
            className={appSt.productsTitle}
            style={{
              fontSize: "18px",
              color: "black",
              width: "100%",
              fontWeight: "500",
            }}
          >
            Бонус за открытие
          </Typography.TitleResponsive>

          <Gap size={8} />

          <div
            style={{
              padding: "16px 16px 16px 0",
              background: "#F3F4F5",
              display: "flex",
              gap: "18px",
              borderRadius: "16px",
              alignItems: "center",
            }}
          >
            <img
              src={img2}
              alt=""
              width={50}
              style={{ objectPosition: "0 -5px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text>
                Кэшбэк в топовой категории каждый месяц
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Например, такси, рестораны или одежда
              </Typography.Text>
            </div>
          </div>

          <Gap size={8} />

          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="small"
            className={appSt.productsTitle}
            style={{
              fontSize: "20px",
              color: "black",
              width: "100%",
              fontWeight: "500",
            }}
          >
            Другие преимущества Детской карты:
          </Typography.TitleResponsive>

          <Gap size={16} />

          <List tag="ul" marker="–">
            <List.Item>Бесплатная — навсегда и без условий</List.Item>
            <List.Item>
              Кэшбэк до 100% в барабане суперкэшбэка и категориях на выбор
            </List.Item>
            <List.Item>Копилка с повышенной ставкой 12% годовых</List.Item>
            <List.Item>
              Приложение для детей с финансовыми подсказками
            </List.Item>
            <List.Item>
              Возможность настраивать лимиты на день, неделю или другой период
            </List.Item>
          </List>

          <Gap size={12} />

          <Typography.Text>
            Ребёнок учится самостоятельно планировать и копить. А вы сможете
            наблюдать из своего приложения и пополнять карту в пару кликов.
          </Typography.Text>

          <Gap size={12} />

          <Typography.Text>
            Детские финансы и взрослое спокойствие в безопасности.
          </Typography.Text>

          <Gap size={12} />

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              className={appSt.productsTitle}
              style={{
                fontSize: "18px",
                color: "black",
                width: "100%",
                fontWeight: "500",
                maxWidth: "max-content",
                padding: 0,
              }}
            >
              Успейте заказать
            </Typography.TitleResponsive>
            <img src={point} alt="" width={18} height={18} />
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={handleClickSubmit}>
          Заказать карту с кэшбэком
        </ButtonMobile>
      </div>
    </>
  );
};
