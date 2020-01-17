const filterings = ["ㅈㄴ", "ㅅㅂ", "ㅆㅂ", "ㅆㅍ", "ㅈㄹ", "ㅄ", "ㅂㅅ", "ㄷㅊ", "ㄲㅈ", "ㅁㅊ", "꼬추", "좀고", "좀비고", "꺼져", "존나", "닥쳐", "시발", "시벌", "시팔", "씨발", "씨벌", "씨팔", "샹", "썅", "병신", "붕신", "븅신", "빙신", "새끼", "좆", "좇", "죶", "죷", "젖", "젗", "졎", "졏", "니미", "니앰", "니엠", "니엄", "에미", "애미", "에비", "애비", "미친", "또라이", "호로", "호모", "지랄", "지럴", "니기미", "염병", "얨병", "임병", "옘병", "씹", "애자", "눈깔", "쪼다", "십장생", "부랄", "불알", "부럴", "빨아", "빠라", "핥아", "핥어", "할타", "할터", "개놈", "개년", "걸레", "창년", "창놈", "제길", "제기랄", "늬미", "삐리", "엠창", "앰창", "육시랄", "육시럴", "우라질", "오라질", "짭새", "마빡", "멍청", "자지", "잠지", "잠즤", "꼬추", "꼬치", "섹스", "쎾쓰", "섹", "쎅", "섻", "쎇", "쌕", "쌗", "빠굴", "빠구리", "빠굴이", "삿갓", "사까시", "사카시", "오랄", "오럴", "색스", "샋", "빨자", "핥자", "빨기", "핥기", "빨지", "핥지", "짬지", "페니스", "패니스", "성교", "성관계", "자위", "딸딸", "은꼴", "뻑", "뻐큐", "빠큐", "뻐킹", "퍼킹", "뻑휴", "뻨휴", "잦이", "자즤", "봊이", "엠생", "앰생", "엿", "인성", "더티", "써글", "썩을", "응디", "등신", "스레기", "쓰레기", "뒤져", "뒈져", "뻐킹", "빠킹", "개자식", "하악", "하앙", "하앍", "개새", "느금마", "운영", "매니저", "관리자", "쥐엠", "지엠", "운영진", "개발자", "개발진", "메니저", "매니져", "메니져", "운영팀", "개발팀", "관리팀"]

function replace(text) {
    filterings.forEach(f => {
        const r = new RegExp(f, 'g')
        text = text.replace(r, '')
    })
    return text
}

function check(text) {
    return !filterings.some(f => text.indexOf(f) !== -1)
}

module.exports = {
    replace,
    check
}