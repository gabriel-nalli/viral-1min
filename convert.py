import re

with open('styles.css', 'r') as f:
    css = f.read()

# Tokens
css = re.sub(r'--shadow-brut:.*?;', '--shadow-brut: 0 12px 32px rgba(0,0,0,0.05);', css)
css = re.sub(r'--shadow-brut-lg:.*?;', '--shadow-brut-lg: 0 20px 48px rgba(0,0,0,0.07);', css)
css = re.sub(r'--shadow-brut-xl:.*?;', '--shadow-brut-xl: 0 32px 64px rgba(0,0,0,0.09);', css)

# Borders
css = re.sub(r'border: 2\.5px solid var\(--ink\);', 'border: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border: 2px solid var\(--ink\);', 'border: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border: 3px solid var\(--ink\);', 'border: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border-top: 2\.5px solid var\(--ink\);', 'border-top: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border-bottom: 2\.5px solid var\(--ink\);', 'border-bottom: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border-left: 2px solid var\(--ink\);', 'border-left: 1px solid rgba(26,26,26,0.08);', css)
css = re.sub(r'border-right: 2px solid var\(--ink\);', 'border-right: 1px solid rgba(26,26,26,0.08);', css)

# Shadows explicitly hardcoded
css = re.sub(r'box-shadow: 3px 3px 0 var\(--ink\);', 'box-shadow: 0 8px 24px rgba(0,0,0,0.04);', css)
css = re.sub(r'box-shadow: 4px 4px 0 var\(--ink\);', 'box-shadow: 0 12px 32px rgba(0,0,0,0.05);', css)
css = re.sub(r'box-shadow: 5px 5px 0 var\(--ink\);', 'box-shadow: 0 16px 40px rgba(0,0,0,0.06);', css)
css = re.sub(r'box-shadow: 6px 6px 0 var\(--ink\);', 'box-shadow: 0 18px 44px rgba(0,0,0,0.07);', css)
css = re.sub(r'box-shadow: 8px 8px 0 var\(--ink\);', 'box-shadow: 0 24px 54px rgba(0,0,0,0.08);', css)
css = re.sub(r'box-shadow: 2px 2px 0 var\(--ink\);', 'box-shadow: 0 4px 12px rgba(0,0,0,0.03);', css)

# Text shadow
css = re.sub(r'text-shadow: 4px 4px 0 var\(--ink\);', 'text-shadow: 0 4px 12px rgba(0,0,0,0.1);', css)
css = re.sub(r'-webkit-text-stroke: 2px var\(--ink\);', '', css)

# Hover transformations for buttons
css = css.replace('transform: translate(-2px,-2px)', 'transform: translateY(-3px)')
css = css.replace('transform: translate(2px,2px)', 'transform: translateY(0)')

# Btn gradients & specific soft drop shadows
css = css.replace('.btn-primary {\n  background: var(--accent);\n  color: #fff;', 
                  '.btn-primary {\n  background: linear-gradient(135deg, #FF5B94, var(--accent));\n  color: #fff;\n  box-shadow: 0 12px 30px rgba(255,45,122,0.25);')

css = css.replace('.btn-lime {\n  background: var(--secondary);\n  color: var(--ink);', 
                  '.btn-lime {\n  background: linear-gradient(135deg, #dcff66, var(--secondary));\n  color: var(--ink);\n  box-shadow: 0 12px 30px rgba(200,240,0,0.25);')

css = css.replace('.btn-ghost {\n  background: #fff;\n  color: var(--ink);', 
                  '.btn-ghost {\n  background: rgba(255,255,255,0.8);\n  backdrop-filter: blur(8px);\n  color: var(--ink);\n  box-shadow: 0 12px 30px rgba(0,0,0,0.05);')

# Eyebrow / Tags
css = css.replace('border: 1.5px solid var(--ink);', 'border: 1px solid rgba(26,26,26,0.08);')
css = css.replace('border: 2px solid var(--ink);', 'border: 1px solid rgba(26,26,26,0.08);')

# Feature boxes and Testimonial cards - adding light glass/backdrop if they use secondary or pink
css = css.replace('background: var(--primary);', 'background: rgba(255, 244, 230, 0.6); backdrop-filter: blur(16px);')

# Revert specific body and main background if replaced
css = css.replace('body {\n  font-family: var(--font-body);\n  background: rgba(255, 244, 230, 0.6); backdrop-filter: blur(16px);',
                  'body {\n  font-family: var(--font-body);\n  background: var(--bg);')

with open('styles.css', 'w') as f:
    f.write(css)

print("Conversion to Glassmorphism complete!")
