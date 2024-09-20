'use server'  //Create a server action.

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function checkAuth() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
}

export async function createPost(formData: FormData) {

    checkAuth();
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
  
    try {
      await prisma.post.create({
          data: {
              title, 
              body,
          }
      })
    } catch (error) {
      return {
        error: 'Something went Wrong',
      }
    }
       //reValidate posts page
      revalidatePath("/posts");
}

export async function deletePost(idx: number) {
  checkAuth();
    try {
        await prisma.post.delete({
          where: {
            id: idx,
          },
        })
    } catch (error) {
      return {
        error: 'Something went Wrong',
      }
    }
    //reValidate posts page
      revalidatePath("/posts");
}