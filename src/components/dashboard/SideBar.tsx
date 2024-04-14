"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui";

export default function SideBar() {
  return (
    <div className="w-1/5 mt-2">
      <div className="bg-slate-300 h-full">
        <h1>Sidebar</h1>

        <ul>
          <li>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Cerrar Sesion
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
