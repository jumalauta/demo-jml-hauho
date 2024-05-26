in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color;// = vec4(1,1,1,1);

void main() {
    vec4 colorStart = vec4(0,0,1,1);
    vec4 colorEnd = vec4(1,1,1,1);
    float ySplice = 0.045;

    fragColor = mix(colorStart, colorEnd, texCoord.y-mod(texCoord.y,ySplice));

    fragColor *= color;
}
