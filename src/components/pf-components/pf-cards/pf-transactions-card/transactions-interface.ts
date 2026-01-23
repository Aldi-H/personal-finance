"use client";

import {
  AirplaneInFlightIcon,
  BookOpenIcon,
  BusIcon,
  CoffeeIcon,
  CoinsIcon,
  ForkKnifeIcon,
  GameControllerIcon,
  GasPumpIcon,
  HammerIcon,
  HandbagIcon,
  IslandIcon,
  LightbulbFilamentIcon,
  ListIcon,
  PencilRulerIcon,
  PiggyBankIcon,
  PillIcon,
  PopcornIcon,
  ShoppingCartIcon,
  StethoscopeIcon,
  SuitcaseSimpleIcon,
  TShirtIcon,
  TrendUpIcon,
  UserIcon,
  WifiMediumIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import React from "react";

export type TransactionType = "income" | "expense";

export interface PfTransactionsColumnsInterface {
  id: string;
  transactionName: string;
  transactionDate: string;
  transactionCategory: string;
  transactionAmount: string;
  type: TransactionType;
  icon?: string;
}

export const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  ShoppingCartIcon,
  ForkKnifeIcon,
  HandbagIcon,
  PopcornIcon,
  CoffeeIcon,
  TShirtIcon,
  PillIcon,
  StethoscopeIcon,
  PencilRulerIcon,
  LightbulbFilamentIcon,
  HammerIcon,
  AirplaneInFlightIcon,
  SuitcaseSimpleIcon,
  BusIcon,
  GasPumpIcon,
  WrenchIcon,
  BookOpenIcon,
  IslandIcon,
  WifiMediumIcon,
  GameControllerIcon,
  CoinsIcon,
  TrendUpIcon,
  PiggyBankIcon,
  ListIcon,
  UserIcon,
};
