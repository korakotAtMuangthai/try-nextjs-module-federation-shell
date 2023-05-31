import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: "try-next-js",
      clientSecret: "YYhfHizSCMMRTgDXBo6L9NbtUKTf4KUu",
      issuer: "http://localhost:8080/realms/myrealm",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
