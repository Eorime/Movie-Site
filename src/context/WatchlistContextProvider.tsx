import React from "react";
import { useState, useContext, createContext } from "react";

interface Movie {
  rank: number;
  title: string;
  big_image: string;
  rating: string;
  description: string;
}
