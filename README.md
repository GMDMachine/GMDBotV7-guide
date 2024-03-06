# GMDBotV7-guide

지메기봇 v7 소스코드로 봇 만들기!  
참고한 사이트: [여기](https://discordjs.guide)
</br>
</br>
1. Visual Studio Code를 설치하세요. [설치 링크](https://code.visualstudio.com/docs/?dv=win64user)
2. 아래 버튼에서 Download Zip 버튼으로 소스코드를 다운받은 뒤, 봇을 실행할 폴더에서 압축을 해제하세요.</br> ![Screenshot 2024-03-06 9 52 28 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/22e5b1c9-4682-4462-b107-bb187f068702)
3. [디스코드 개발자 포털](https://discord.com/developers/applications)에 접속해서 [New Application] 버튼을 눌러 애플리케이션을 만드세요. </br>![Screenshot 2024-03-06 11 41 58 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/42204714-6f1b-4838-9263-457a09bc6393)
4. 이 버튼을 눌러 봇 메뉴로 들어가세요.</br>![Screenshot 2024-03-06 11 40 35 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/f088dd5b-4d63-4cae-91fd-bb4f5b80c3b0)
5. 봇 메뉴에서는 봇의 이름을 바꿀 수 있습니다.
6. Reset Token을 눌러 토큰을 리셋한 뒤 복사해 두세요.</br>![Screenshot 2024-03-06 11 44 01 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/b2a2885c-d1df-499d-8ef2-16db7933a4f7)
7. node.js를 검색해서 다운 받으세요.
8. 프로젝트 폴더에서 cmd 실행 후 ```node```를 입력한 후, 아래의 코드들을 실행하세요.
```js
npm install discord.js
npm install --save-dev eslint
```
8. 이제 프로젝트 폴더에 "config.json" 파일을 만들고, 아래의 내용을 적으세요
```json
{
	"token": "봇의 디스코드토큰",
	"clientId": "봇의 클라이언트 ID",
	"guildId": "당신이 봇을 개발하려는 서버의 ID"
}
```
9. 서버에 봇을 추가해봅시다. 왼쪽의 OAuth2 탭에 들어가세요.</br>![Screenshot 2024-03-06 12 58 57 PM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/179b1906-d2bb-4da7-bde3-d0b3e062478b)
10. 밑으로 쭉 내려가 권한 두 개를 키세요.(위에는 bot, 아래는 Administrator)</br>![Screenshot 2024-03-06 12 59 58 PM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/cad28399-7823-4e7d-bc89-bc4126346795)</br>![Screenshot 2024-03-06 1 01 12 PM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/123162e3-7d6b-4413-9be6-9e30083c3c8c)
11. 맨 아래 생긴 링크를 Copy 버튼으로 복사한 뒤 주소에 들어가 봇을 서버에 추가하세요. (아까 ID를 넣은 그 서버)</br>![Screenshot 2024-03-06 1 05 09 PM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/0c0f2aed-5300-485d-b585-88aaef4327c9)
12. 이제, 프로젝트 폴더에 있는 ```start.cmd``` 파일을 실행하여 봇을 실행시키세요!
