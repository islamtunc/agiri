// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah, Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.

"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { createPostSchema } from "@/lib/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await prisma.mmavahi.create({
    data: {
      content, // Convert string[] to a single string
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}
