"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const t = useTranslations("header");
  const session = useSession();
  const items = [
    {
      href: "/races",
      title: t("nav.races"),
    },
    {
      href: "/calendar",
      title: t("nav.calendar"),
    },
    {
      href: `/pages/${t("nav.aboutSlug")}`,
      title: t("nav.about"),
    },
    {
      href: "/news",
      title: t("nav.news"),
    },
    {
      href: "/blog",
      title: t("nav.blog"),
    },
    {
      href: session.status === "authenticated" ? "/account" : "/auth/signin",
      title:
        session.status === "authenticated" ? t("nav.account") : t("nav.signin"),
    },
  ];
  return (
    <nav>
      <ul className="hidden lg:flex space-x-4">
        {items.map((item, index) => (
          <li key={index} className="relative">
            <Link
              href={item.href}
              title={item.title}
              className="p-3 transition-all rounded-md text-white"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="light" className="text-white">
              <Bars3Icon className="size-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                onPress={() => {
                  redirect(item.href);
                }}
              >
                {item.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
