package request

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

func request(route string, url string, token string) []byte {
	client := &http.Client{}
	req, _ := http.NewRequest("GET", url+route, nil)
	res, _ := client.Do(req)

	responseData, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	return responseData
}

func GitHub(route string) []byte {
	return request(route, "https://api.github.com/", "")
}

func CheckAuthentication(token string) bool {
	client := &http.Client{}
	req, _ := http.NewRequest("GET", "https://api.github.com/user", nil)
	req.Header.Set("Authorization", "token "+token)
	res, _ := client.Do(req)

	data, _ := ioutil.ReadAll(res.Body)
	obj := make(map[string]string)
	_ = json.Unmarshal([]byte(data), &obj)

	if obj["name"] == "megatank58" {
		return true
	} else {
		return false
	}
}

func Oauth(route string) []byte {
	return request(route, "https://github.com/login/oauth/", "")
}

func RawGitHub(route string) []byte {
	return request(route, "https://raw.githubusercontent.com/Megatank58/", "")
}
