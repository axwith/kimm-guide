---
course_clip_ref: "+α (실습 3 뒤)"
result_path: "C:\\work\\kimm\\research-planner\\50-grants"
next_clip_id: "part-4-01-grow"
---

# +α. 검색이 안 될 때 — Aside 브라우저 불러 쓰기

> 언제: 실습 3을 마치고 실습 4로 넘어가기 전, 시간이 남는 분
> 남는 것: Claude Code가 브라우저를 직접 열어 읽어 온 공고 정리 파일

---

## 이 절에서 보는 것

실습 3에서 공고 상세 페이지나 학술 DB처럼 **검색으로는 내용이 안 읽히는 페이지**를 만났을 수 있습니다. 화면을 스크립트로 그리는 사이트는 주소를 읽어도 빈 페이지가 돌아옵니다.

이럴 때는 사람이 보는 브라우저를 Claude Code가 직접 열게 하면 됩니다. Aside는 AI가 조작할 수 있는 브라우저이고, 명령줄 도구(CLI)를 깔면 Claude Code가 그 브라우저를 불러 씁니다.

| 순서 | 하는 일 | 어디서 |
|---|---|---|
| 1 | Aside 내려받아 설치, 로그인 | 브라우저 · Aside |
| 2 | Aside에 Claude 연결 | Aside 설정 |
| 3 | CLI와 Claude Code 스킬 설치 | Aside 설정 |
| 4 | Claude Code에서 Aside 불러 쓰기 | Claude Code |

> 강의 때 강사 맥북에서도 다운로드부터 같이 설치합니다. 강사 화면을 보며 따라옵니다.

---

## 1. Aside 내려받아 설치하고 로그인

1. [aside.com/download](https://aside.com/download) 에 들어가면 Windows용 설치 파일(`AsideInstaller-…-win-x64.exe`)이 자동으로 받아집니다. 안 받아지면 **Download Aside manually** 를 누릅니다.

   ![Aside 다운로드 페이지 (Windows에서 열었을 때)](/images/setup/aside-01-download.png)

2. `다운로드` 폴더에서 받은 파일을 실행하고 안내대로 설치합니다.
3. Aside가 열리면 이메일을 넣고 **Continue**, 또는 **Sign in with Google** 로 로그인합니다. 처음이면 그대로 계정이 만들어집니다. 무료 요금제로 충분합니다.

   ![Aside 첫 화면 — 로그인](/images/setup/aside-02-signin.png)

4. 처음 설정에서 기존 브라우저의 기록·쿠키를 가져올지 물으면 **가져오지 않습니다.** 기관 시스템에 로그인된 상태를 Aside에 넘기지 않기 위해서입니다.

---

## 2. Aside에 Claude 연결

Aside 안의 AI가 쓸 모델로 내 Claude 구독을 연결합니다.

1. Aside **Settings → Models → Providers** 에서 **Connect** 를 누릅니다.
2. **Subscription** 의 **Claude Subscription** 을 고르고, 뜨는 창에서 Claude 계정으로 로그인합니다.
3. **Settings → Models → Task models** 에서 Claude 모델을 고릅니다.

---

## 3. CLI와 Claude Code 스킬 설치 — Aside 설정에서

Aside **Settings → Developers** 한 화면에서 둘 다 합니다.

1. **Aside CLI** 카드의 설치 버튼을 누릅니다(이미 깔려 있으면 **Update** 로 보입니다).
2. **Skill & MCP** 의 **Aside Skills** 에서 **Add skill to…** → **Claude Code** 를 고릅니다.

![Aside Settings → Developers (강사 맥, CLI가 이미 설치된 상태)](/images/setup/aside-03-developers.png)

3. PowerShell 창을 **새로** 열고 확인합니다.

```powershell
aside --version
```

버전 숫자가 나오면 됩니다. 명령을 못 찾는다고 나오면 PowerShell 창을 닫고 다시 엽니다.

<details>
<summary>설정 화면에서 설치가 안 되면 (PowerShell로 설치)</summary>

```powershell
$installer = Join-Path $env:TEMP 'aside-install.ps1'
Invoke-WebRequest -UseBasicParsing -Uri https://releases.aside.com/install.ps1 -OutFile $installer
& $installer
aside login
aside skills install --target claude-code
```

`aside login` 은 Aside 앱의 **Settings → Account → Devices** 에 뜬 코드를 승인하면 끝납니다. 공식 안내는 설치 파일을 실행하기 전에 서명(게시자 `AT YOUR SIDE INC`)을 확인하라고 합니다. 기관 PC에서 서명 확인이 오류로 나오면 PC 관리자에게 문의하고 강사 화면으로 봅니다.

</details>

Claude Code 앱에서 **새 세션**을 열어야 Aside 스킬이 보입니다.

---

## 4. Claude Code에서 Aside 불러 쓰기

`C:\work\kimm\research-planner` 로 새 세션을 열고 보냅니다.

```text
50-grants 의 공고 목록에서 1번 공고의 상세 페이지를 Aside 브라우저로 열어서 신청 자격, 지원 기간, 제출 서류를 표로 정리해 50-grants 에 저장해 줘. 로그인은 하지 말고 공개 페이지만 보고, 확인한 페이지 주소를 함께 적어 줘.
```

`aside` 명령 실행 승인 창이 뜨면 명령 원문을 읽고 허용합니다. Aside 창에서 페이지가 열리고 넘어가는 것이 보입니다.

다른 데서도 똑같이 씁니다.

```text
이 논문 페이지는 검색으로 안 읽혀. Aside 로 열어서 초록과 저자, 발표 연도를 가져와 줘: {주소}
```

**이렇게 나옵니다** — 강사 맥에서 Aside로 IRIS 사업공고를 "인공지능"으로 검색해 정리한 결과(2026-10-15 실행, 일부)

| 구분 | 공고명 | 부처(전문기관) | 접수 기간 |
|---|---|---|---|
| 접수중 | 2026년 4극3특 호남권 과학기술혁신지원사업 연구단 모집 공고 | 과학기술정보통신부(연구개발특구진흥재단) | 2026-09-11 ~ 2026-10-27 |
| 접수예정 | 2026년 지역거점 AX 혁신 기술개발 사업 신규지원 대상과제 공고(표준모델 AX R&D) | 다부처 / 과학기술정보통신부(정보통신산업진흥원) | 2026-10-26 ~ 2026-11-09 |

Aside는 상세 페이지 주소(`iris.go.kr/contents/retrieveBsnsAncmView.do?ancmId=…`)와 화면 캡처도 함께 남겼습니다.

![Aside가 연 IRIS 검색 결과 화면 (2026-10-15 실행)](/images/results/aside-iris.png)

**확인할 것**: 결과 파일에 확인한 페이지 주소가 있고, 그 주소를 직접 열었을 때 내용이 같습니다.

---

## 지킬 것

| 하지 않는 것 | 이유 |
|---|---|
| 기관 내부 시스템에 로그인한 채 Aside 쓰기 | Aside는 로그인된 사이트를 그대로 쓰고, 화면 내용이 AI 모델로 갑니다 |
| 기관 자료·장비 정보·개인정보가 보이는 페이지 열기 | 오늘 실습은 공개 자료만 씁니다 |
| 권한을 **Full access** 로 바꾸기 | 기본값(Guard)이면 다른 폴더에 손대기 전에 묻습니다 |

분석 데이터 공유는 Aside **Settings → Security & Privacy** 에서 끌 수 있습니다.

## 자주 막히는 곳

| 증상 | 이렇게 합니다 |
|---|---|
| `aside` 명령을 못 찾음 | PowerShell 창을 새로 엽니다. 그래도 없으면 3단계 CLI 설치를 다시 합니다 |
| `Aside isn't running on this machine` | Aside 앱을 먼저 켜 둡니다. 막 켰으면 잠시 뒤 다시 보냅니다 |
| `aside login` 이 끝나지 않음 | Aside **Settings → Account → Devices** 에서 코드를 승인했는지 봅니다 |
| Claude Code가 Aside를 모름 | 3단계 스킬 설치를 하고 **새 세션**을 엽니다 |
| 서명 확인 오류(기관 PC) | 관리자 인증서 문제입니다. 오늘은 강사 화면으로 봅니다 |

---

## 다음

[실습 4. 내 공간으로 키우기 →](#part-4-01-grow)
