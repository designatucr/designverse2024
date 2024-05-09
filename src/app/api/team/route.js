import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/user/Team";

export const POST = async (req) => {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);
  const { team } = await req.json();

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  try {
    const newTeam = {
      links: {
        devpost: "",
      },
      name: team.name,
      members: [{ discord: user.discord, name: user.name, uid: user.id }],
      status: 0,
    };
    const docRef = await addDoc(collection(db, "teams"), newTeam);
    await updateDoc(doc(db, "users", user.id), {
      team: docRef.id,
    });
    return res.json(
      {
        message: "OK",
        items: {
          devpost: newTeam.links.devpost,
          members: newTeam.members,
          id: docRef.id,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  const res = NextResponse;
  const { auth, user } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${"MESSAGE VARIABLE SHOULD BE HERE"}` },
      { status: auth }
    );
  }

  const { devpost, members, name } = await req.json();

  try {
    await updateDoc(doc(db, "teams", user.team), {
      name: name,
      links: {
        devpost: devpost,
      },
      members: members,
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const team = req.nextUrl.searchParams.get("teamid");

  try {
    const snapshot = await getDoc(doc(db, "teams", team));
    if (!snapshot.exists())
      return res.json({ message: "Invalid Team ID" }, { status: 500 });
    const { links, members, name, table } = snapshot.data();

    return res.json(
      {
        message: "OK",
        items: {
          devpost: links.devpost,
          members: members,
          name: name,
          table: table,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
};
