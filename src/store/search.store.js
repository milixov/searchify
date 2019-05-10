import { action, observable } from "mobx";
import axios from "axios";
import { url } from "./url";

export default class SearchStore {
  @observable search = { data: [], loading: false };

  @action
  searchData(query) {
    this.search.loading = true;
    axios
      .get(url + "/posts?q=" + query, { timeout: 5000 })
      .then(response => (this.search.data = response.data))
      .catch(() => (this.search.data = []))
      .finally(() => (this.search.loading = false));
  }

  @action
  a() {
    this.searchData(1);
  }
}
