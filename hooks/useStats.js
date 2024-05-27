"use client";
import axiosInstance from "@/axios-config";
import React, { useEffect, useState } from "react";

export function useTalentStats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let query = "/user-stats/talent";
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    stats: data,
    statsLoading: loading,
    statsRefetch: makeRefetch,
  };
}

export function useSocietyStats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let query = "/user-stats/society";
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    stats: data,
    statsLoading: loading,
    statsRefetch: makeRefetch,
  };
}

export function useGlobalStats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let query = "/stats";
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    stats: data,
    statsLoading: loading,
    statsRefetch: makeRefetch,
  };
}
