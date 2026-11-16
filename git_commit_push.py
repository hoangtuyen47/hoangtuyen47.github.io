# -*- coding: utf-8 -*-
import subprocess

cwd = r"C:\Users\Admin\.gemini\antigravity\scratch\teacher_portfolio_hub"

def run(cmd):
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
    print(f"=== {cmd} ===")
    if p.stdout.strip():
        print("STDOUT:", p.stdout.strip())
    if p.stderr.strip():
        print("STDERR:", p.stderr.strip())
    return p.returncode

run("git config --global user.email hoangtuyen47@gmail.com")
run("git config --global user.name HoangTuyen")
run("git init")
run("git checkout -B main")
run("git add .")
run("git commit -m \"Cap nhat 12 bai hoc 3 nhom va bao mat admin mat khau ht2027@\"")
run("git remote remove origin")
run("git remote add origin https://github.com/hoangtuyen47/vuivui.git")
print("Trying push...")
run("git push -u origin main --force")
