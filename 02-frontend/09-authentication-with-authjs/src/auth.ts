import NextAuth from "next-auth"; // Import NextAuth agar bisa melakukan authentication menggunakan Auth.js

import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
});
