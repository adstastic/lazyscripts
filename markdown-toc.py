import sys, os, re

if len(sys.argv) == 1:
    print('No input filepath specified.')
    raise SystemExit
elif len(sys.argv) != 2:
    print('Too many arguments')
    raise SystemExit
else:
    file = sys.argv[1]

toc_line_format = re.compile(r'\#+\s.+')
toc = []

with open(file, 'r') as f:
    for line in f:
        if re.match(toc_line_format, line):
            level, heading = line.split(' ', 1)
            level = level.replace('#', '  ')
            heading = heading.replace('\n', '')
            link = heading.lower().replace(' ', '-')
            toc_string = level + '* [' + heading + '](#' + link + ')'
            toc.append(toc_string)

print('\n'.join(toc))
