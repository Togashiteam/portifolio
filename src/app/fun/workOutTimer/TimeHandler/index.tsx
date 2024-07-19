"use client";

import { useState, useRef, useEffect } from "react";

interface ItimeHandlerProps {
  timeResult: string;
  workOutTimerHandler: () => void;
}

export default TimerHandler;
