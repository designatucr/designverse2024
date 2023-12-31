import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import {
  where,
  query,
  collection,
  getCountFromServer,
  getDocs,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";

export async function GET() {
  const res = NextResponse;
  const { auth } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  try {
    const participants = (
      await getCountFromServer(
        query(
          collection(db, "users"),
          where("roles.participants", "in", [-1, 0, 1])
        )
      )
    ).data().count;

    const teams = (
      await getCountFromServer(query(collection(db, "teams")))
    ).data().count;

    const judges = (
      await getCountFromServer(
        query(collection(db, "users"), where("roles.judges", "in", [-1, 0, 1]))
      )
    ).data().count;

    const volunteers = (
      await getCountFromServer(
        query(
          collection(db, "users"),
          where("roles.volunteers", "in", [-1, 0, 1])
        )
      )
    ).data().count;

    const mentors = (
      await getCountFromServer(
        query(collection(db, "users"), where("roles.mentors", "in", [-1, 0, 1]))
      )
    ).data().count;

    const committees = (
      await getCountFromServer(
        query(
          collection(db, "users"),
          where("roles.committees", "in", [-1, 0, 1])
        )
      )
    ).data().count;
    const sponsors = (
      await getCountFromServer(
        query(
          collection(db, "users"),
          where("roles.sponsors", "in", [-1, 0, 1])
        )
      )
    ).data().count;

    const admins = (
      await getCountFromServer(
        query(collection(db, "users"), where("roles.admins", "in", [-1, 0, 1]))
      )
    ).data().count;

    const events = await getDocs(collection(db, "events"));

    const eventAttendees = {};

    events.forEach((doc) => {
      const { name, attendance } = doc.data();
      eventAttendees[name] = attendance;
    });

    const users = {
      participants,
      teams,
      judges,
      volunteers,
      mentors,
      committees,
      sponsors,
      admins,
    };

    return res.json(
      { items: { users, events: eventAttendees } },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
