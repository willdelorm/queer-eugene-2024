"use server";

import {
  announcementSchema,
  eventSchema,
  meetingSchema,
  resourceSchema,
} from "./schemas.utils";
import {
  createResourceDocument,
  deleteDocumentFromCollection,
} from "./firebase.utils";
import { revalidatePath } from "next/cache";

export async function onSubmitResourceAction(collectionKey, data) {
  let schemaToParse;
  let revalidateCacheFor;
  switch (collectionKey) {
    case "organizations":
      revalidateCacheFor = "resources";
      schemaToParse = resourceSchema;
      break;
    case "announcements":
      revalidateCacheFor = "announcements";
      schemaToParse = announcementSchema;
      break;
    case "events":
      revalidateCacheFor = "events";
      schemaToParse = eventSchema;
      break;
    case "meetings":
      revalidateCacheFor = "meetings";
      schemaToParse = meetingSchema;
      break;
  }

  const parsed = schemaToParse.safeParse(data);
  if (!parsed.success) {
    return {
      message: "Invalid form data",
    };
  }

  const response = await createResourceDocument(collectionKey, data);
  if (response) {
    return {
      message: "Unable to create. Please try again later.",
    };
  }
  forceCacheRevalidation(revalidateCacheFor);
  return {
    message: "Success",
  };
}

export async function deleteEntry(collection, id) {
  const response = await deleteDocumentFromCollection(collection, id);
  return response;
}

export const forceCacheRevalidation = (revalidationRequest) => {
  switch (revalidationRequest) {
    case "resources":
      revalidatePath("/resources", "layout");
      revalidatePath("/dashboard/resources", "page");
      break;
    case "announcements":
      revalidatePath("/", "page");
      revalidatePath("/dashboard/announcements", "page");
      break;
    case "events":
      revalidatePath("/programs/events", "page");
      revalidatePath("/programs/one-stop-shop", "page");
      revalidatePath("/dashboard/events", "page");
      break;
    case "meetings":
      revalidatePath("/about/bylaws-&-minutes", "page");
      revalidatePath("/dashboard/meetings", "page");
      break;
    default:
      revalidatePath("/", "layout");
  }
  revalidatePath("/dashboard", "page");
};

