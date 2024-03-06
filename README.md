# GMDBotV7-guide

지메기봇 v7 소스코드로 봇 만들기!  
참고한 사이트: [여기](https://discordjs.guide)
</br>
</br>
1. Visual Studio Code를 설치하세요. [설치 링크](https://code.visualstudio.com/docs/?dv=win64user)
2. 아래 버튼에서 Download Zip 버튼으로 소스코드를 다운받은 뒤, 봇을 실행할 폴더에서 압축을 해제하세요.</br> ![Screenshot 2024-03-06 9 52 28 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/22e5b1c9-4682-4462-b107-bb187f068702)
3. [디스코드 개발자 포털](https://discord.com/developers/applications)에 접속해서 [New Application] 버튼을 눌러 애플리케이션을 만드세요. </br>![Screenshot 2024-03-06 11 41 58 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/42204714-6f1b-4838-9263-457a09bc6393)
4. 이 버튼을 눌러 봇 메뉴로 들어가세요.</br>![Screenshot 2024-03-06 11 40 35 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/f088dd5b-4d63-4cae-91fd-bb4f5b80c3b0)
5. Reset Token을 눌러 토큰을 리셋한 뒤 복사해 두세요.</br>![Screenshot 2024-03-06 11 44 01 AM](https://github.com/GMDMachine/GMDBotV7-guide/assets/161696961/b2a2885c-d1df-499d-8ef2-16db7933a4f7)
6. node.js를 검색해서 다운 받으세요.
7. 프로젝트 폴더에서 cmd 실행 후 ```node```를 입력한 후, 아래의 코드들을 실행하세요.
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
