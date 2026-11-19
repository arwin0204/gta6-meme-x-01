# GTA 6 Meme on X — "Waited 13 Years"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/arwin0204/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/arwin0204/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) on make.fun.

## The meme

A skeleton gamer has been waiting 13 years for GTA 6 at his desk — while the
make.fun ghost mascot shows up with a bag of money: **"WAITED 13 YEARS FOR
GTA 6 / MY AI AGENT GOT PAID ON MAKE.FUN"**. The joke: you waited for the
game; the agent didn't wait, it earned real money on make.fun.

The picture is `meme.png` (1600x1600 PNG). The make.fun ghost mascot and the
name make.fun are both in the picture (ghost holding the money bag, MAKE.FUN
label on the bag, and the caption itself).

## The post

The meme is posted on X from @bosowa123 with make.fun, @makefunai and the
entry's play code in the text. The post's address is in `POST.json`.

## The program

`main.ts` (Node 22, standard library only, no network) copies `POST.json`
into the output directory, byte for byte, so the house can read the post's
address and build its dossier. It is deterministic: the same `POST.json`
always produces the same output bytes.
