import Home from "@/pages/home";
import Coins from "@/pages/coins";
import Options from "@/pages/options";
import Contract from "@/pages/contract";
import Assets from "@/pages/assets";
import Recharge from "@/pages/assets/recharge";
import Withdrawal from "@/pages/assets/withdrawal";
import Transfer from "@/pages/assets/transfer";
import Currency from "@/pages/assets/currency";
import Profile from "@/pages/profile";
import Commission from "@/pages/profile/commission";
import CreditCenter from "@/pages/profile/creditCenter";
import IdentityAuthentication from "@/pages/profile/identityAuthentication";
import RealNameAuthentication from "@/pages/profile/identityAuthentication/realNameAuthentication";
import AdvancedCertification from "@/pages/profile/identityAuthentication/advancedCertification";
import SecurityCenter from "@/pages/profile/securityCenter";
import GoogleAuthenticator from "@/pages/profile/securityCenter/googleAuthenticator";
import LoginPassword from "@/pages/profile/securityCenter/loginPassword";
import SettingTransactionPassword from "@/pages/profile/securityCenter/settingTransactionPassword";
import AddNewAccount from "@/pages/profile/securityCenter/addNewAccount";
import MessageNotification from "@/pages/profile/messageNotification";
import AccountSettings from "@/pages/profile/accountSettings";
import SwitchAccount from "@/pages/profile/accountSettings/switchAccount";

export interface RouteObject {
  path: string;
  name: string;
  element?: React.ReactNode;
  meta?: {
    title?: string;
    showNavbar?: number;
    showTabbar?: boolean;
    noAuth?: boolean;
    goBackUrl?: string;
    hasBack?: boolean;
    icon?: string;
    authRoute?: boolean;
  };
  children?: RouteObject[];
}

export const routeObjects: RouteObject[] = [
  {
    path: "/",
    name: "home",
    element: <Home />,
    meta: { title: "home", showTabbar: true },
  },
  {
    path: "/coins",
    name: "coins",
    element: <Coins />,
    meta: { title: "Coins", showNavbar: 1, showTabbar: true, goBackUrl: "/" },
  },
  {
    path: "/options",
    name: "options",
    element: <Options />,
    meta: { title: "Options", showNavbar: 1, showTabbar: true, goBackUrl: "/" },
  },
  {
    path: "/contract",
    name: "contract",
    element: <Contract />,
    meta: {
      title: "Contract",
      showNavbar: 1,
      showTabbar: true,
      goBackUrl: "/",
    },
  },
  {
    path: "/assets",
    name: "assets",
    children: [
      {
        path: "",
        name: "assets",
        element: <Assets />,
        meta: {
          title: "Assets",
          showNavbar: 1,
          showTabbar: true,
          goBackUrl: "/",
        },
      },
      {
        path: "recharge",
        name: "assets",
        element: <Recharge />,
        meta: {
          title: "Recharge Coin",
          showNavbar: 1,
          goBackUrl: "/assets",
        },
      },
      {
        path: "withdrawal",
        name: "assets",
        element: <Withdrawal />,
        meta: {
          title: "Withdrawal",
          showNavbar: 1,
          goBackUrl: "/assets",
        },
      },
      {
        path: "transfer",
        name: "assets",
        element: <Transfer />,
        meta: {
          title: "Transfer",
          showNavbar: 1,
          goBackUrl: "/assets",
        },
      },
      {
        path: "currency",
        name: "assets",
        element: <Currency />,
        meta: {
          title: "Choose Currency",
          showNavbar: 1,
          goBackUrl: "/assets",
        },
      },
    ],
  },
  {
    path: "/profile",
    name: "profile",
    children: [
      {
        path: "",
        name: "profile",
        element: <Profile />,
        meta: {
          title: "Profile",
          // showNavbar: 2,
          // goBackUrl: "/",
        },
      },
      {
        path: "commission",
        name: "profile",
        element: <Commission />,
        meta: {
          title: "My Delegation",
          showNavbar: 2,
          goBackUrl: "/profile",
          hasBack: true,
          icon: "bag",
        },
      },
      {
        path: "credit-center",
        name: "profile",
        element: <CreditCenter />,
        meta: {
          title: "Credit Center",
          showNavbar: 2,
          goBackUrl: "/profile",
          hasBack: true,
          icon: "box",
        },
      },
      {
        path: "identity-authentication",
        name: "profile",
        children: [
          {
            path: "",
            name: "profile",
            element: <IdentityAuthentication />,
            meta: {
              title: "Identity Authentication",
              showNavbar: 2,
              goBackUrl: "/profile",
              hasBack: true,
              icon: "guard",
            },
          },
          {
            path: "real-name-authentication",
            name: "profile",
            element: <RealNameAuthentication />,
            meta: {
              title: "Real Name Authentication",
              showNavbar: 2,
              goBackUrl: "/profile/identity-authentication",
              hasBack: true,
              icon: "guard",
            },
          },
          {
            path: "advanced-certification",
            name: "profile",
            element: <AdvancedCertification />,
            meta: {
              title: "Advanced Certification",
              showNavbar: 2,
              goBackUrl: "/profile/identity-authentication",
              hasBack: true,
              icon: "guard",
            },
          },
        ],
      },
      {
        path: "security-center",
        name: "profile",
        children: [
          {
            path: "",
            name: "profile",
            element: <SecurityCenter />,
            meta: {
              title: "Security Center",
              showNavbar: 2,
              goBackUrl: "/profile",
              hasBack: true,
              icon: "lock",
            },
          },
          {
            path: "google-authenticator",
            name: "profile",
            element: <GoogleAuthenticator />,
            meta: {
              title: "Binding Google Authenticator",
              showNavbar: 2,
              goBackUrl: "/profile/security-center",
              hasBack: true,
              icon: "lock",
            },
          },
          {
            path: "login-password",
            name: "profile",
            element: <LoginPassword />,
            meta: {
              title: "Login Password",
              showNavbar: 2,
              goBackUrl: "/profile/security-center",
              hasBack: true,
              icon: "lock",
            },
          },
          {
            path: "setting-transaction-password",
            name: "profile",
            element: <SettingTransactionPassword />,
            meta: {
              title: "Setting Transaction Password",
              showNavbar: 2,
              goBackUrl: "/profile/security-center",
              hasBack: true,
              icon: "lock",
            },
          },
          {
            path: "add-new-account",
            name: "profile",
            element: <AddNewAccount />,
            meta: {
              title: "Add New Account",
              showNavbar: 2,
              goBackUrl: "/profile/security-center",
              hasBack: true,
              icon: "user",
            },
          },
        ],
      },
      {
        path: "message-notification",
        name: "profile",
        element: <MessageNotification />,
        meta: {
          title: "Message Notification",
          showNavbar: 2,
          goBackUrl: "/profile",
          hasBack: true,
          icon: "mail",
        },
      },
      {
        path: "account-settings",
        name: "profile",
        children: [
          {
            path: "",
            name: "profile",
            element: <AccountSettings />,
            meta: {
              title: "Account Settings",
              showNavbar: 2,
              goBackUrl: "/profile",
              hasBack: true,
              icon: "user",
            },
          },
          {
            path: "switch-account",
            name: "profile",
            element: <SwitchAccount />,
            meta: {
              title: "Switch Account",
              showNavbar: 2,
              goBackUrl: "/profile/account-settings",
              hasBack: true,
              icon: "user",
            },
          },
        ],
      },
    ],
  },
];

const generateRoutes = (routeObject: RouteObject) => {
  const routes: RouteObject[] = [];
  const parentPath = routeObject.path;
  if (routeObject.children && routeObject.children.length > 0) {
    routeObject.children.forEach((childRoute) => {
      routes.push(
        ...generateRoutes({
          ...childRoute,
          path:
            parentPath +
            (parentPath[parentPath.length - 1] === "/"
              ? ""
              : childRoute.path
              ? "/"
              : "") +
            childRoute.path,
        })
      );
    });
  } else {
    routes.push(routeObject);
  }
  return routes;
};

const renderRoutes: RouteObject[] = [];

routeObjects.forEach((routeObject) => {
  renderRoutes.push(...generateRoutes(routeObject));
});

export default renderRoutes;
