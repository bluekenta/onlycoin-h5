import { t } from "@/i18n";
import classnames from "classnames";
import style from "./style.module.scss";
import PrimaryButton, { WalletButton } from "@/components/button";
import { useState } from "react";
import { EType } from "@/components/overlay/interface";
import Overlay from "@/components/overlay";
import Icons from "@/components/icons";

const Login = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [overlayType, setOverlayType] = useState<string>("");

  return (
    <section
      className={classnames(style.wrapper, "flex flex-col pt-[20px] px-[16px]")}
    >
      <h2 className="font-extrabold text-[24px] leading-[32px]">
        {t("welcome")}
      </h2>
      <div>
        <div className="flex flex-col gap-[10px] pt-[16px]">
          <p className="text-label">{t("email-label")}</p>
          <input
            type="text"
            placeholder={t("email-desc")}
            className="h-[48px] border-[1px] border-border_inactive rounded-[12px] bg-transparent px-[16px] text-[15px] leading-[18px] placeholder-inactive"
          />
        </div>
        <div className="pt-[20px]">
          <span className="text-label">{t("register-redirect")} </span>
          <span
            className="text-primary text-[15px] leading-[21px]"
            onClick={() => {
              setShowOverlay(true);
              setOverlayType("paymentMethod");
            }}
          >
            {t("register")}
          </span>
        </div>
        <PrimaryButton
          cn="mt-[30px]"
          onClick={() => {
            setShowOverlay(true);
            setOverlayType("receptionMethod");
          }}
        >
          {t("email-login")}
        </PrimaryButton>
      </div>
      <div className="flex flex-col">
        <p
          className={classnames(
            style.other_signin,
            "flex flex-col mt-[25px] relative text-center text-[14px] leading-[16px]"
          )}
        >
          {t("other-signin")}
        </p>

        {/* 
        onCick event is only for demo purpose. Remove after backend integration
        */}

        <WalletButton
          cn="mt-[25px]"
          type="wallet_metamask"
          onClick={() => {
            setShowOverlay(true);
            setOverlayType("selectCurrency");
          }}
        >
          {t("metamask")}
        </WalletButton>
        <div className="flex gap-[13px] mt-[16px]">
          <WalletButton
            cn="flex-1"
            type="wallet_okx"
            onClick={() => {
              setShowOverlay(true);
              setOverlayType("selectToken");
            }}
          >
            {t("okx")}
          </WalletButton>
          <WalletButton
            cn="flex-1"
            type="wallet_phantom"
            onClick={() => {
              setShowOverlay(true);
              setOverlayType("addAccount");
            }}
          >
            {t("phantom")}
          </WalletButton>
        </div>
      </div>

      <Overlay
        title="Select payment method"
        type={EType.METHOD}
        visible={showOverlay && overlayType === "paymentMethod"}
        setVisible={setShowOverlay}
        methodChildren={{
          desc: "Available payment methods based on your region",
          cards: [
            {
              symbol: <Icons type="card" className="!w-[30px] !h-[30px]" />,
              title: "Debit or Credit",
              card: [
                <Icons type="card_visa" className="!w-[39px] !h-[14px]" />,
                <Icons type="card_master" className="!w-[30px] !h-[18px]" />,
              ],
              desc: "5 - 10 mins $100 lowest buy limit",
              alarm: true,
            },
            {
              symbol: (
                <Icons type="card_bank" className="!w-[30px] !h-[30px]" />
              ),
              title: "Business Bank Transfer",
              card: [
                <Icons type="card_sepa" className="!w-[28px] !h-[18px]" />,
              ],
              desc: "1 - 5 business days ",
              alarm: true,
            },
          ],
        }}
      />

      <Overlay
        title="Reception method"
        type={EType.METHOD}
        visible={showOverlay && overlayType === "receptionMethod"}
        setVisible={setShowOverlay}
        methodChildren={{
          desc: "Available payment methods based on your region",
          cards: [
            {
              symbol: (
                <Icons type="card_personal" className="!w-[30px] !h-[30px]" />
              ),
              title: "Personal",
              desc: "5 - 10 mins $100 lowest buy limit",
              alarm: true,
            },
            {
              symbol: (
                <Icons type="card_bank" className="!w-[30px] !h-[30px]" />
              ),
              title: "Business",
              desc: "1 - 5 business days",
              alarm: true,
            },
          ],
        }}
      />

      <Overlay
        title={t("select-currency")}
        type={EType.CURRENCY}
        visible={showOverlay && overlayType === "selectCurrency"}
        setVisible={setShowOverlay}
        currencyChildren={{
          listTitle: t("select-currency"),
          searchBox: true,
          currencies: [
            {
              icon: <Icons type="SGD" className="!w-[36px] !h-[36px]" />,
              name: "SGD",
              desc: t("sg-dollar"),
            },
            {
              icon: <Icons type="INR" className="!w-[36px] !h-[36px]" />,
              name: "INR",
              desc: t("ind-rupee"),
            },
            {
              icon: <Icons type="USD" className="!w-[36px] !h-[36px]" />,
              name: "USD",
              desc: t("us-dollar"),
            },
            {
              icon: <Icons type="SGD" className="!w-[36px] !h-[36px]" />,
              name: "SGDTest1",
              desc: t("sg-dollar"),
            },
            {
              icon: <Icons type="INR" className="!w-[36px] !h-[36px]" />,
              name: "INRTest1",
              desc: t("ind-rupee"),
            },
            {
              icon: <Icons type="USD" className="!w-[36px] !h-[36px]" />,
              name: "USDTest1",
              desc: t("us-dollar"),
            },
            {
              icon: <Icons type="SGD" className="!w-[36px] !h-[36px]" />,
              name: "SGDTest2",
              desc: t("sg-dollar"),
            },
            {
              icon: <Icons type="INR" className="!w-[36px] !h-[36px]" />,
              name: "INRTest2",
              desc: t("ind-rupee"),
            },
            {
              icon: <Icons type="USD" className="!w-[36px] !h-[36px]" />,
              name: "USDTest2",
              desc: t("us-dollar"),
            },
          ],
        }}
      />

      <Overlay
        title={t("select-currency")}
        type={EType.CURRENCY}
        visible={showOverlay && overlayType === "selectToken"}
        setVisible={setShowOverlay}
        currencyChildren={{
          listTitle: "All tokens",
          searchBox: true,
          currencies: [
            {
              icon: <Icons type="SGD" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "Tron",
            },
            {
              icon: <Icons type="INR" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "BNB Smart Chain",
            },
            {
              icon: <Icons type="USD" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "TON",
            },
            {
              icon: <Icons type="SGD" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "Tron- Test1",
            },
            {
              icon: <Icons type="INR" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "BNB Smart Chain- Test1",
            },
            {
              icon: <Icons type="USD" className="!w-[36px] !h-[36px]" />,
              name: "USDT",
              desc: "TON- Test1",
            },
          ],
        }}
      />

      <Overlay
        title="Add Account"
        type={EType.METHOD}
        visible={showOverlay && overlayType === "addAccount"}
        setVisible={setShowOverlay}
        methodChildren={{
          cards: [
            {
              symbol: (
                <Icons type="card_personal" className="!w-[30px] !h-[30px]" />
              ),
              title: "Personal",
            },
            {
              symbol: (
                <Icons type="card_bank" className="!w-[30px] !h-[30px]" />
              ),
              title: "Business",
            },
          ],
        }}
      />
    </section>
  );
};

export default Login;
