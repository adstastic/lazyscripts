function kill_proc_port() {
  kill -9 $(lsof -ti tcp:$1)
}
