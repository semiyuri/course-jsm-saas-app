"use client";

import { cn, getSubjectColor } from "@/lib/utils";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from "@/constants/soundwaves.json";
import { addToSessionHistory } from "@/lib/actions/companion.actions";

interface Props {
  companionId: string;
  userName: string;
  userImage: string;
  subject: string;
  name: string;
  topic: string;
  style: string;
  voice: string;
}

const CompanionComponent = ({
  companionId,
  name,
  subject,
  userName,
  userImage,
}: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMicrophone = () => {
    setIsMuted((prev) => !prev);

    if (lottieRef.current) {
      if (isMuted) {
        lottieRef.current.play();
      } else {
        lottieRef.current.stop();
      }
    }
  };

  const handleStartSession = () => {
    addToSessionHistory(companionId);
  };

  return (
    <section className="flex flex-col h-[70vh]">
      <section className="flex gap-8 max-sm:flex-col">
        <div className="companion-section">
          <div
            className="companion-avatar"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <div className="absolute opacity-0">
              <Image
                src={`/icons/subjects/${subject}.svg`}
                alt={subject}
                width={150}
                height={150}
                className="max-sm:w-fit"
              />
            </div>

            <div className="absolute">
              <Lottie
                lottieRef={lottieRef}
                autoplay
                animationData={soundwaves}
                className="companion-lottie"
              />
            </div>
          </div>

          <p className="font-bold text-2xl">{name}</p>
        </div>

        <div className="user-section">
          <div className="user-avatar">
            <Image
              src={userImage}
              alt={userName}
              width={130}
              height={130}
              className="rounded-lg"
            />

            <p className="font-bold text-2xl">{userName}</p>
          </div>

          <button className="btn-mic" onClick={toggleMicrophone}>
            <Image
              src={isMuted ? "/icons/mic-off.svg" : "/icons/mic-on.svg"}
              alt="Mic"
              width={36}
              height={36}
            />

            <p className="max-sm:hidden">{isMuted ? "Unmute" : "Mute"}</p>
          </button>

          <button
            className={cn(
              "rounded-lg py-2 cursor-pointer transition-colors w-full text-white bg-primary",
            )}
            onClick={handleStartSession}
          >
            Start Session
          </button>
        </div>
      </section>

      <section className="transcript">
        <div className="transcript-message no-scrollbar">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          provident magni ratione ipsa labore voluptas fugit impedit natus neque
          eligendi omnis, nemo consequatur dolor voluptates, quis nihil expedita
          mollitia animi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Corporis velit ea nemo, iure eum aut recusandae obcaecati quos!
          Sit dolore iusto esse omnis atque, cupiditate fugiat harum minima
          dolor similique!
        </div>
        <div className="transcript-fade" />
      </section>
    </section>
  );
};

export default CompanionComponent;
