import { CalendarEvent, MVRace } from "@/lib/types/misc";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";
import RaceCard from "../cards/race-card";

type Props = {
  event: CalendarEvent;
};

const SingleEvent: FC<Props> = ({ event }) => {
  return (
    <div
      className={clsx(
        "rounded",
        event.extendedProps?.post_type === "event"
          ? "bg-blue-300"
          : "bg-red-400"
      )}
      onClick={() => {}}
    >
      <Popover showArrow placement="bottom">
        <PopoverTrigger>
          <Button
            disableAnimation
            disableRipple
            className="w-full rounded text-white"
            size="sm"
            variant="light"
          >
            {event.title}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 max-w-64">
          <RaceCard race={event.extendedProps as MVRace} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SingleEvent;
