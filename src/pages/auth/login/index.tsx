import { t } from "@/i18n";
import classnames from "classnames";
import style from "./style.module.scss";
import PrimaryButton, { WalletButton } from "@/components/Button";

const Login = () => {
  return (
    <section
      className={classnames(
        style.wrapper,
        "flex flex-col font-SFProDisplay pt-[20px] px-[15px]"
      )}
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
          <span className="text-primary text-[15px] leading-[21px]">
            {t("register")}
          </span>
        </div>
        <PrimaryButton cn="mt-[30px]">{t("email-login")}</PrimaryButton>
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
        <WalletButton cn="mt-[25px]" type="wallet_metamask">
          {t("metamask")}
        </WalletButton>
        <div className="flex gap-[13px] mt-[16px]">
          <WalletButton cn="flex-1" type="wallet_okx">
            {t("okx")}
          </WalletButton>
          <WalletButton cn="flex-1" type="wallet_phantom">
            {t("phantom")}
          </WalletButton>
        </div>
      </div>
    </section>
  );
};

export default Login;
