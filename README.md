# Zeha

Hankaku / Zenkaku converter written in Typescript

## Install

```
npm install zeha
```

## Usage

```
import { zen_to_han, han_to_zen } from 'zeha';

zen_to_han('アカサタナＡＢＣＤＥＦＧ１２３４', {kana=false, digit=true, ascii=true}})
>> アカサタナABCDEFG1234

han_to_zen('ｱｶｻﾀﾅABCDEFG1234', {kana=false, digit=true, ascii=true})
>> ｱｶｻﾀﾅＡＢＣＤＥＦＧ１２３４
```

## Options

- kana: boolean (default = false)
- ascii: boolean (default = true)
- digit: boolean (defaault = true)
