import bag from "@/assets/layout/navbar/bag.png";
import guard from "@/assets/layout/navbar/guard.png";
import history from "@/assets/layout/navbar/history.png";
import lock from "@/assets/layout/navbar/lock.png";
import mail from "@/assets/layout/navbar/mail.png";
import search from "@/assets/layout/navbar/search.png";
import user from "@/assets/layout/navbar/user.png";
import box from "@/assets/layout/navbar/box.png";

import commission from "@/assets/profile/commission.png";
import credit from "@/assets/profile/credit.png";
import identity from "@/assets/profile/identity.png";
import security from "@/assets/profile/security.png";
import message from "@/assets/profile/message.png";
import settings from "@/assets/profile/settings.png";
import lang from "@/assets/profile/lang.png";

import email from "@/assets/auth/email.png";
import password from "@/assets/auth/password.png";
import phone from "@/assets/auth/phone.png";
import eyeClose from "@/assets/auth/eye-close.png";

type Icon = {
  name: string;
  icon: string;
  width: number;
  height: number;
};

type Icons = {
  [key: string]: Icon;
};

const icons: Icons = {
  bag: {
    name: "bag",
    icon: bag,
    width: 20,
    height: 20,
  },
  guard: {
    name: "guard",
    icon: guard,
    width: 18,
    height: 20,
  },
  history: {
    name: "history",
    icon: history,
    width: 24,
    height: 24,
  },
  lock: {
    name: "lock",
    icon: lock,
    width: 17,
    height: 20,
  },
  mail: {
    name: "mail",
    icon: mail,
    width: 24,
    height: 20,
  },
  search: {
    name: "search",
    icon: search,
    width: 24,
    height: 24,
  },
  user: {
    name: "user",
    icon: user,
    width: 20,
    height: 20,
  },
  box: {
    name: "box",
    icon: box,
    width: 24,
    height: 21,
  },
  commission: {
    name: "commission",
    icon: commission,
    width: 20,
    height: 20,
  },
  credit: {
    name: "credit",
    icon: credit,
    width: 20,
    height: 20,
  },
  identity: {
    name: "identity",
    icon: identity,
    width: 20,
    height: 20,
  },
  security: {
    name: "security",
    icon: security,
    width: 20,
    height: 20,
  },
  message: {
    name: "message",
    icon: message,
    width: 20,
    height: 20,
  },
  settings: {
    name: "settings",
    icon: settings,
    width: 20,
    height: 20,
  },
  lang: {
    name: "lang",
    icon: lang,
    width: 20,
    height: 20,
  },
  email: {
    name: "email",
    icon: email,
    width: 20,
    height: 20,
  },
  phone: {
    name: "phone",
    icon: phone,
    width: 20,
    height: 20,
  },
  password: {
    name: "password",
    icon: password,
    width: 20,
    height: 20,
  },
  eyeClose: {
    name: "eyeClose",
    icon: eyeClose,
    width: 20,
    height: 20,
  },
};

export default icons;
